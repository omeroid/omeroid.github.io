// @ts-check
/**
 * コンサルティング支援事例（consultingWorks）を Notion「対外発信DB」から生成する。
 *
 * 使い方:
 *   NOTION_TOKEN=secret_xxx node scripts/generate-consulting-works.mjs
 *   （GitHub Actions からは .github/workflows/sync-consulting-works.yml が実行）
 *
 * 出力: src/data/consulting-works.generated.ts を上書き。
 *
 * 設計の要（重要）:
 *   - 読むのは「対外発信DB」だけ。機密のプロジェクトDBには一切触れない。
 *   - 公開ページ用なので、社名・個人名などの固有名詞は載せない。
 *     生成後に「社名スクラバ」でクライアントマスタ由来の固有名詞が混入していないか検査し、
 *     1件でも見つかれば異常終了して PR を作らせない。
 *   - 0件しか取れなかった場合も、既存データを消さないよう異常終了する。
 *
 * 前提となる「対外発信DB」側のプロパティ（docs/consulting-works-sync.md 参照）:
 *   - HP掲載          … チェックボックス（ON の行だけを掲載対象にする）
 *   - 呼称            … テキスト（匿名の呼称。例「医療用医薬品の大手卸売企業」）
 *   - 業種            … セレクト（HPの絞り込み用の粗い業種。未設定なら業界relationから推定）
 *   - 背景・課題       … テキスト（構造化本文）
 *   - アプローチ       … テキスト（構造化本文）
 *   - 成果            … テキスト（構造化本文）
 *   - テーマ（新設禁止）… リレーション（→ タグ。7分類の名称をそのまま使う）
 *   - 業界（新設禁止）  … リレーション（業種の推定に使う）
 *   - 表示順          … 数値（任意。小さいほど先頭。未設定は末尾）
 */

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

/* ------------------------------------------------------------------ *
 * 設定
 * ------------------------------------------------------------------ */

const NOTION_VERSION = '2022-06-28'
const NOTION_TOKEN = process.env.NOTION_TOKEN

/** 対外発信DB（【未】対外発信DB）のデータベースID */
const OUTBOUND_DB_ID =
  process.env.OUTBOUND_DB_ID ?? '594053fb34e94b45978f2c987c22a76c'

/** クライアントマスタ（社名スクラバの照合元）のデータベースID */
const CLIENT_DB_ID =
  process.env.CLIENT_DB_ID ?? '907032c1d07b469e8c2665be47445c9b'

/** 対外発信DB のプロパティ名（Notion 側の表記に合わせる） */
const PROP = {
  hpFlag: 'HP掲載',
  alias: '呼称',
  industry: '業種',
  background: '背景・課題',
  approach: 'アプローチ',
  outcome: '成果',
  theme: 'テーマ（新設禁止）',
  industryRel: '業界（新設禁止）',
  order: '表示順',
}

/** テーマ名 → カード左上の英字ラベル（category）。先頭テーマを採用する */
const THEME_TO_CATEGORY = {
  経営戦略・事業戦略: 'STRATEGY',
  'IT/DX戦略': 'DX / AI',
  新規事業: 'NEW BUSINESS',
  'M&A・アライアンス・JV設立': 'M&A / ALLIANCE',
  ノーコード・ローコード開発: 'LOW-CODE',
  PMO: 'PMO',
  その他: 'CONSULTING',
}

/**
 * 業界（新設禁止）マスタの名称 → HP表示用の粗い業種。
 * キーは前方一致で判定する（例「メーカー_食品・飲料」→「メーカー」で製造）。
 */
const INDUSTRY_PREFIX_TO_COARSE = [
  // 医薬・ヘルスケア系は、より一般的な「メーカー」「卸」「小売」より先に判定する
  ['メーカー_製薬', '医薬・ヘルスケア'],
  ['卸_医薬品', '医薬・ヘルスケア'],
  ['小売_医薬品', '医薬・ヘルスケア'],
  ['メーカー', '製造'],
  ['卸', '商社・卸売'],
  ['小売', '小売'],
  ['在庫・倉庫', '運輸・物流'],
  ['不動産', '不動産'],
  ['情報通信', '情報通信'],
  ['メディア', 'メディア'],
  ['金融', '金融'],
  ['運輸', '運輸・物流'],
  ['建設', '建設'],
  ['公共', '公共・自治体'],
  ['農林水産', 'その他'],
  ['旅行', 'サービス'],
  ['生活関連サービス', 'サービス'],
]

/* ------------------------------------------------------------------ *
 * Notion API
 * ------------------------------------------------------------------ */

async function notion(path, body) {
  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Notion API ${res.status} for ${path}: ${text}`)
  }
  return res.json()
}

/** データベースの全ページを取得（ページネーション対応） */
async function queryAll(databaseId, filter) {
  const pages = []
  let cursor
  do {
    const data = await notion(`databases/${databaseId}/query`, {
      ...(filter ? { filter } : {}),
      ...(cursor ? { start_cursor: cursor } : {}),
      page_size: 100,
    })
    pages.push(...data.results)
    cursor = data.has_more ? data.next_cursor : undefined
  } while (cursor)
  return pages
}

/** リレーション先ページのタイトル（1行テキスト）を取得。ID→名前をキャッシュ */
const titleCache = new Map()
async function relationTitle(pageId) {
  if (titleCache.has(pageId)) return titleCache.get(pageId)
  const page = await notion(`pages/${pageId}`)
  const props = page.properties ?? {}
  let title = ''
  for (const value of Object.values(props)) {
    if (value?.type === 'title') {
      title = plainText(value.title)
      break
    }
  }
  titleCache.set(pageId, title)
  return title
}

/* ------------------------------------------------------------------ *
 * プロパティ抽出
 * ------------------------------------------------------------------ */

function plainText(rich) {
  return (rich ?? [])
    .map((t) => t.plain_text ?? '')
    .join('')
    .trim()
}

function readProp(props, name) {
  const p = props[name]
  if (!p) return undefined
  switch (p.type) {
    case 'checkbox':
      return p.checkbox
    case 'rich_text':
      return plainText(p.rich_text)
    case 'title':
      return plainText(p.title)
    case 'select':
      return p.select?.name
    case 'number':
      return p.number ?? undefined
    case 'relation':
      return p.relation.map((r) => r.id)
    default:
      return undefined
  }
}

function toCoarseIndustry(industryNames) {
  for (const name of industryNames) {
    for (const [prefix, coarse] of INDUSTRY_PREFIX_TO_COARSE) {
      if (name.startsWith(prefix)) return coarse
    }
  }
  return 'その他'
}

/* ------------------------------------------------------------------ *
 * メイン
 * ------------------------------------------------------------------ */

async function main() {
  if (!NOTION_TOKEN) {
    throw new Error('環境変数 NOTION_TOKEN が未設定です。')
  }

  // 掲載対象（HP掲載 = ON）のみ取得
  const pages = await queryAll(OUTBOUND_DB_ID, {
    property: PROP.hpFlag,
    checkbox: { equals: true },
  })

  const works = []
  for (const page of pages) {
    const props = page.properties ?? {}

    const themeIds = readProp(props, PROP.theme) ?? []
    const themes = []
    for (const id of themeIds) themes.push(await relationTitle(id))
    const tags = themes.filter(Boolean)

    let industry = readProp(props, PROP.industry)
    if (!industry) {
      const indIds = readProp(props, PROP.industryRel) ?? []
      const indNames = []
      for (const id of indIds) indNames.push(await relationTitle(id))
      industry = toCoarseIndustry(indNames.filter(Boolean))
    }

    const category = THEME_TO_CATEGORY[tags[0]] ?? 'CONSULTING'

    works.push({
      order: readProp(props, PROP.order) ?? Number.MAX_SAFE_INTEGER,
      category,
      client: readProp(props, PROP.alias) ?? industry,
      industry,
      tags: tags.length ? tags : ['その他'],
      background: readProp(props, PROP.background) || undefined,
      approach: readProp(props, PROP.approach) || undefined,
      outcome: readProp(props, PROP.outcome) || undefined,
    })
  }

  works.sort((a, b) => a.order - b.order)
  for (const w of works) delete w.order

  if (works.length === 0) {
    throw new Error(
      '掲載対象（HP掲載=ON）が0件でした。既存データを保護するため中断します。' +
        '対外発信DBの HP掲載 チェックとプロパティ設定を確認してください。'
    )
  }

  // 社名スクラバ: クライアントマスタの固有名詞が混入していないか検査
  await assertNoClientNames(works)

  writeGeneratedFile(works)
  console.log(`generated ${works.length} case(s).`)
}

/** クライアントマスタの社名が出力に紛れ込んでいないか検査（混入時は異常終了） */
async function assertNoClientNames(works) {
  const clientPages = await queryAll(CLIENT_DB_ID)
  const names = new Set()
  for (const page of clientPages) {
    for (const value of Object.values(page.properties ?? {})) {
      if (value?.type === 'title') {
        const t = plainText(value.title)
        // 「株式会社」等の会社種別語を除いた識別部分で照合する
        const core = t
          .replace(
            /株式会社|有限会社|合同会社|合資会社|一般社団法人|御中|様/g,
            ''
          )
          .trim()
        if (core.length >= 2) names.add(core)
      }
    }
  }

  const haystack = works
    .map((w) => [w.client, w.background, w.approach, w.outcome].join('\n'))
    .join('\n')

  const hits = [...names].filter((n) => haystack.includes(n))
  if (hits.length) {
    throw new Error(
      `社名スクラバ: 公開データに取引先名が混入している可能性があります → ${hits.join(
        ', '
      )}\n対外発信DB の該当行の文面を匿名化してください。`
    )
  }
}

/* ------------------------------------------------------------------ *
 * ファイル出力
 * ------------------------------------------------------------------ */

function tsString(s) {
  return `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

function serializeWork(w) {
  const lines = ['  {']
  lines.push(`    category: ${tsString(w.category)},`)
  lines.push(`    client: ${tsString(w.client)},`)
  lines.push(`    industry: ${tsString(w.industry)},`)
  lines.push(`    tags: [${w.tags.map(tsString).join(', ')}],`)
  if (w.background) lines.push(`    background: ${tsString(w.background)},`)
  if (w.approach) lines.push(`    approach: ${tsString(w.approach)},`)
  if (w.outcome) lines.push(`    outcome: ${tsString(w.outcome)},`)
  lines.push('  },')
  return lines.join('\n')
}

function writeGeneratedFile(works) {
  const header = `/**
 * コンサルティングの支援事例（WORKS の一覧データ）
 *
 * ⚠️ このファイルは自動生成です。手で編集しないでください。
 *     生成元 : Notion「対外発信DB」（HP掲載 = ON の行）
 *     生成器 : scripts/generate-consulting-works.mjs
 *     反映   : GitHub Actions が develop 宛の Pull Request として作成します。
 *     詳細   : docs/consulting-works-sync.md
 *
 * 掲載ポリシー: 取引先名・案件名・担当者名などの固有名詞は載せません。
 */
import type { WorkRow } from '~/types'

export const consultingWorks: WorkRow[] = [
`
  const body = works.map(serializeWork).join('\n')
  const out = `${header}${body}\n]\n`

  const __dirname = dirname(fileURLToPath(import.meta.url))
  const target = resolve(__dirname, '../src/data/consulting-works.generated.ts')
  writeFileSync(target, out, 'utf8')
}

main().catch((err) => {
  console.error(err.message ?? err)
  process.exit(1)
})
