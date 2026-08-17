/**
 * 技術スタックのアイコンを simple-icons から生成してリポジトリに埋め込む。
 * 外部CDN（cdn.simpleicons.org）に依存しないためのスクリプト。
 *
 *   node scripts/generate-stack-icons.mjs
 *
 * 生成物:
 *   - src/assets/icons/<slug>.svg   … fill="currentColor" のSVG
 *   - src/lib/stack-icon-colors.ts  … ブランドカラーの一覧
 *
 * アイコンを追加したいときは ICON_SLUGS に simple-icons のスラッグを足して再実行する。
 * simple-icons のデータは CC0-1.0。
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as simpleIcons from 'simple-icons'

const ICON_SLUGS = [
  'go',
  'rust',
  'nodedotjs',
  'postgresql',
  'mysql',
  'react',
  'typescript',
  'vuedotjs',
  'terraform',
  'docker',
  'apple',
  'android',
  'raspberrypi',
  'ethereum',
]

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const iconDir = resolve(root, 'src/assets/icons')
mkdirSync(iconDir, { recursive: true })

/** slug → simple-icons のエクスポート名（si + PascalCase） */
const exportName = (slug) => 'si' + slug.charAt(0).toUpperCase() + slug.slice(1)

const colors = {}

for (const slug of ICON_SLUGS) {
  const icon = simpleIcons[exportName(slug)]
  if (!icon) throw new Error(`simple-icons に ${slug} が見つかりません`)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><title>${icon.title}</title><path d="${icon.path}"/></svg>\n`
  writeFileSync(resolve(iconDir, `${slug}.svg`), svg)
  colors[slug] = `#${icon.hex}`
  console.log(`generated ${slug}.svg (${icon.title} #${icon.hex})`)
}

const ts = `// 自動生成ファイル — 編集しないこと
// scripts/generate-stack-icons.mjs で simple-icons から生成している
/** 技術スタックアイコンのブランドカラー */
export const stackIconColors: Record<string, string> = ${JSON.stringify(colors, null, 2)
  .replace(/"([a-z0-9]+)":/g, '$1:')
  .replace(/"/g, "'")}
`
writeFileSync(resolve(root, 'src/lib/stack-icon-colors.ts'), ts)
console.log('generated src/lib/stack-icon-colors.ts')
