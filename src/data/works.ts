/**
 * WORKS（IT・システム開発の実績）
 *
 * freee の請求データ（2019-02-28 〜 2026-08-31 / 取引先一覧_部門別.csv）のうち
 * IT部門の取引先を出典とする。同一グループの2社（自動車関連サービス）は1件に統合し、
 * 統合後の企業数は24社。守秘義務のため取引先名・案件名は伏せ、
 * 業種・支援内容・支援期間のみ掲載する（掲載文は CSV の「HP掲載用タイトル（匿名）」
 * 「プロジェクト概要（社外公開用）」にもとづく）。
 * 5ヶ月以上の18社を一覧に載せ、1〜4ヶ月の短期6社は footnote でまとめている。
 * 期間表記と期間バーは months から自動で組み立てる（WorkRow 参照）。
 *
 * 絞り込みは6軸（業種・フェーズ・商流・契約形態・技術・テーマ）。
 * ・phase / dealFlow / contract は請求データにはない項目で、
 *   tags の「SES開発 / 受託開発」「新規立ち上げ」「要件定義・PMO」「運用保守」と
 *   プロジェクト概要から機械的に振り分けている（tags 側からは重複するので落とした）。
 *   phase は配列で、複数の工程にまたがる案件は order の並び（工程順）で複数持たせる。
 * ・techs は案件ごとの採用技術が請求データに無いため、stack.ts の自社スタックから
 *   案件の性質に合わせて割り当てた推定値。実際の採用技術が確定したら差し替える。
 */
import type {
  SectionHeading,
  WorkFilterLabels,
  WorkRow,
  WorkStat,
} from '~/types'

export const worksHeading: SectionHeading = {
  eyebrow: 'WORKS',
  title: 'IT・システム開発の実績',
  lead: '2019年から現在まで、業種を問わず基幹システム・新規プロダクトの設計と開発を担ってきました。ITを支えるパートナーとして、長期のプロジェクト事例が豊富です。',
}

export const workStats: WorkStat[] = [
  {
    label: 'PROJECTS',
    value: 24,
    unit: '社',
    note: '開発を担当した企業数（2019年〜）',
  },
  {
    label: 'INDUSTRIES',
    value: 8,
    unit: '業種',
    note: '情報通信・卸売・広告・金融ほか',
  },
  {
    label: 'AVG. DURATION',
    value: 2,
    unit: '年',
    value2: 1,
    unit2: 'ヶ月',
    note: '1社あたりの平均継続支援期間',
    featured: true,
  },
]

/** 一覧の見出し行 */
export const worksListHeading = {
  title: '支援期間の長いプロジェクト',
  legend: 'DURATION',
  range: '2019 — 2026',
}

/** 絞り込みUIのラベル。チップと件数は works の値から自動生成される */
export const worksFilterLabels: WorkFilterLabels = {
  lead: '条件から絞り込む',
  leadNote: '（複数の条件を組み合わせられます）',
  all: '条件をリセット',
  open: '条件を開く',
  close: '条件を閉じる',
  groups: [
    { field: 'industry', no: '01', label: '業種', en: 'INDUSTRY' },
    {
      field: 'phase',
      no: '02',
      label: 'フェーズ',
      en: 'PHASE',
      /* フェーズは件数順ではなく工程の順に並べる */
      order: ['構想・企画', '要件定義', '設計・開発', '運用・改善', 'パッケージ導入'],
    },
    { field: 'dealFlow', no: '03', label: '商流', en: 'DEAL FLOW' },
    { field: 'contract', no: '04', label: '契約形態', en: 'CONTRACT' },
    { field: 'techs', no: '05', label: '技術', en: 'TECH' },
    { field: 'tags', no: '06', label: 'テーマ', en: 'THEME' },
  ],
}

/** 1ページあたりの表示件数 */
export const worksPerPage = 10

export const works: WorkRow[] = [
  {
    category: 'SI / ENTERPRISE',
    client: '上場ITコンサルティング・システム開発企業',
    industry: '情報通信',
    tags: ['BtoBシステム', '新規立ち上げ', 'テックリード'],
    phase: ['設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Go', 'AWS'],
    body: '脆弱性管理サービスや新規サービスPOCなど複数の開発プロジェクトに参画。設計・実装から継続的な機能改善まで長期的に支援しています。',
    months: 90,
    start: 2019,
  },
  {
    category: 'WHOLESALE',
    client: '業務用青果の卸売企業',
    industry: '卸売・小売',
    tags: [
      '基幹系システム',
      '新規立ち上げ',
      'テックリード',
      '業務DX',
      'レガシー移行',
    ],
    phase: ['構想・企画', '要件定義', '設計・開発', '運用・改善'],
    dealFlow: 'プライム',
    contract: '請負',
    techs: ['Go', 'Vue.js', 'AWS'],
    body: '受発注システム刷新プロジェクトをomeroidが担当。システム構築から稼働後の継続的な機能拡張まで、4年以上にわたり支援しています。',
    months: 58,
    start: 2021,
  },
  {
    category: 'LEGAL',
    client: '法務サービスを提供する弁護士法人',
    industry: '専門サービス',
    tags: ['Webサイト運用', '運用保守'],
    phase: ['運用・改善'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Movable Type'],
    body: 'コーポレートサイトの運用保守を受託し、4年以上にわたりWebサイトの安定稼働と改善を支援しました。',
    months: 55,
    start: 2020,
    end: 2024,
  },
  {
    category: 'FOOD & BEVERAGE',
    client: '飲料メーカー企業',
    industry: '製造',
    tags: ['業務システム', '新規立ち上げ', 'テックリード', '業務DX'],
    phase: ['設計・開発', '運用・改善'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Go', 'React', 'AWS'],
    body: 'コア業務に関わる飲料レシピの管理システムを新規開発。リリース後の運用保守も継続的に担当し、4年以上にわたり安定稼働と改善を支援しました。',
    months: 52,
    start: 2021,
    end: 2025,
  },
  {
    category: 'SPORTS TECH',
    client: 'スポーツ領域のシステム受託開発企業',
    industry: '情報通信',
    tags: ['BtoCシステム', '新規立ち上げ', 'テックリード', '要件定義・PMO'],
    phase: ['要件定義', '設計・開発'],
    dealFlow: 'サブコン',
    contract: '準委任',
    techs: ['RoR', 'AWS'],
    body: 'スポーツ関連事業やEC領域の事業系システム構築に参画し、要件定義・設計・開発までを一貫して担当。複数名のエンジニア体制で4年以上支援しました。',
    months: 51,
    start: 2019,
    end: 2023,
  },
  {
    category: 'GAME / NFT',
    client: 'ゲーム開発を手掛けるソフトウェア企業',
    industry: '情報通信',
    tags: ['BtoCシステム', '新規立ち上げ', 'テックリード'],
    phase: ['要件定義', '設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Go', 'React', 'Blockchain'],
    body: 'NFTを活用したプラットフォームの開発に初期立ち上げから参画。リリース、その後の機能改修までテックリードとして支援しています。',
    months: 45,
    start: 2022,
    end: 2026,
  },
  {
    category: 'ADVERTISEMENT',
    client: '自動車関連サービスを提供する企業',
    industry: '広告・マーケティング',
    tags: ['BtoBシステム', '新規立ち上げ', 'テックリード', '要件定義・PMO'],
    phase: ['要件定義', '設計・開発', '運用・改善'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Vue.js', 'Amplify', 'AWS'],
    body: 'サイネージシステムの開発移管と追加開発、事業を支える業務システムの追加開発を、マネージャーからプログラマーまでの体制で継続的に担当しています。',
    months: 43,
    start: 2022,
  },
  {
    category: 'SI / PARTNER',
    client: '受託システム開発を手掛けるIT企業',
    industry: '情報通信',
    tags: ['BtoBシステム'],
    phase: ['設計・開発'],
    dealFlow: 'サブコン',
    contract: '準委任',
    techs: ['Vue.js', 'Amplify', 'AWS'],
    body: 'クライアント先のシステム開発プロジェクトに開発要員として継続的に参画し、実装を中心とした技術支援を複数年にわたって提供しました。',
    months: 35,
    start: 2021,
    end: 2024,
  },
  {
    category: 'FOOD TECH',
    client: '食・料理領域のマッチングサービス運営企業',
    industry: '情報通信',
    tags: ['BtoCシステム', '新規立ち上げ', 'テックリード', 'レガシー移行'],
    phase: ['設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Go', 'React', 'AWS'],
    body: '既存システムの技術刷新、認証基盤の刷新やメッセージングアプリ連携機能の構築など、サービス基盤の開発・改善を複数名体制で支援しました。',
    months: 29,
    start: 2020,
    end: 2023,
  },
  {
    category: 'INDUSTRIAL TRADE',
    client: '建築設備・管工機材を扱う卸売企業',
    industry: '卸売・小売',
    tags: [
      '基幹系システム',
      '新規立ち上げ',
      'テックリード',
      '業務DX',
      'レガシー移行',
    ],
    phase: ['構想・企画', '要件定義', '設計・開発', 'パッケージ導入'],
    dealFlow: 'プライム',
    contract: '請負',
    techs: [],
    body: '基幹システムのリプレイスと経営・DX推進プロジェクトを担当。あるべき業務の策定から、パッケージ選定・導入までを支援しました。',
    months: 28,
    start: 2024,
  },
  {
    category: 'IT CONSULTING',
    client: 'ITコンサルティング・受託開発企業',
    industry: '情報通信',
    tags: ['BtoCシステム', 'テックリード'],
    phase: ['運用・改善'],
    dealFlow: 'サブコン',
    contract: '準委任',
    techs: ['Go', 'Docker', 'AWS'],
    body: 'コードレビューなどの開発サポートと、クラウド上の開発環境の提供・運用を通じて、開発品質と開発基盤の両面から支援しました。',
    months: 24,
    start: 2019,
    end: 2021,
  },
  {
    category: 'FINANCE / CRYPTO',
    client: '暗号資産・ブロックチェーン金融企業',
    industry: '金融',
    tags: ['BtoCシステム', 'テックリード'],
    phase: ['設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Go', 'Blockchain'],
    body: 'ブロックチェーンを活用した金融サービス領域において、複数名が業務委託として参画し、開発・技術面の業務支援を1年以上提供しました。',
    months: 16,
    start: 2019,
    end: 2021,
  },
  {
    category: 'SOFTWARE',
    client: '受託開発を手掛けるソフトウェア企業',
    industry: '情報通信',
    tags: ['BtoCシステム', 'テックリード'],
    phase: ['設計・開発'],
    dealFlow: 'サブコン',
    contract: '準委任',
    techs: ['React'],
    body: 'メディア関連システムの開発と、文書作成ソフト向けアドインの開発プロジェクトにおいて、実装面を支援しました。',
    months: 13,
    start: 2024,
    end: 2025,
  },
  {
    category: 'HEALTHCARE DATA',
    client: '医療・ヘルスケアデータ分析企業',
    industry: 'ヘルスケア',
    tags: ['BtoBシステム', 'テックリード', 'データ・AI活用'],
    phase: ['設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Go', 'AWS'],
    body: '医療・健康データを扱うデータプラットフォームの開発で、コードレビューを中心とした技術支援を約1年提供し、開発品質の維持・向上を支援しました。',
    months: 11,
    start: 2023,
    end: 2024,
  },
  {
    category: 'WEB / SI',
    client: '受託システム開発・Web制作を行うIT企業',
    industry: '情報通信',
    tags: ['BtoBシステム', 'データ・AI活用'],
    phase: ['設計・開発'],
    dealFlow: 'サブコン',
    contract: '準委任',
    techs: ['React'],
    body: '受発注システムのリプレイスと大学向け講義プラットフォームの開発に参画。生成AI開発ツールも活用しながら実装面を支援しています。',
    months: 9,
    start: 2025,
  },
  {
    category: 'HR TECH',
    client: '人材紹介・エンジニアリソース提供企業',
    industry: 'サービス',
    tags: ['BtoBシステム'],
    phase: ['設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['Go', 'AWS'],
    body: '電子帳簿関連システムの開発プロジェクトにエンジニアが参画し、開発業務を継続的に支援しました。',
    months: 9,
    start: 2024,
    end: 2024,
  },
  {
    category: 'ESPORTS',
    client: '事業開発型の複合サービス企業',
    industry: 'サービス',
    tags: ['BtoCシステム'],
    phase: ['設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['React'],
    body: 'eスポーツ大会の運営を支えるシステムの開発支援として、開発の推進とプロジェクト遂行を支援しました。',
    months: 8,
    start: 2024,
    end: 2025,
  },
  {
    category: 'SAAS',
    client: 'SaaS・パッケージソフト開発企業',
    industry: '情報通信',
    tags: ['BtoCシステム'],
    phase: ['設計・開発'],
    dealFlow: 'プライム',
    contract: '準委任',
    techs: ['React'],
    body: 'ソフトウェアプロダクトの開発体制にエンジニアが参画し、システム開発業務を支援しました。',
    months: 6,
    start: 2022,
    end: 2022,
  },
]

/** 絞り込みで0件になったときの文言 */
export const worksEmptyText =
  '該当するプロジェクトがありません。条件を減らしてお試しください。'

export const worksFootnotes: string[] = [
  '上記のほか、1〜4ヶ月の短期プロジェクト（スポット改修・技術支援・研修教材の作成など）を6社で実施しています。',
  '※ 支援期間は2019年2月〜2026年8月の実績にもとづきます。取引先名・案件名は守秘義務のため掲載していません。詳細は個別のご相談時に、お伝えできる範囲でご説明します。',
]
