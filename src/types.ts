/**
 * サイト全体で使うコンテンツの型定義。
 * src/data/*.ts はすべてここで定義した型に沿って書く。
 */

/** アクセントカラーのキー。tokens.css の --c-* に対応 */
export type AccentKey =
  'orange' | 'amber' | 'teal' | 'blue' | 'green' | 'purple'

/** 画像。image を省略するとプレースホルダー（差し替え用の枠）が表示される */
export interface Picture {
  image?: ImageMetadata
  alt: string
  /** 画像未設定時に枠内に表示する説明 */
  placeholder?: string
}

/** リンク。href が http から始まる場合は外部リンクとして扱う */
export interface LinkItem {
  label: string
  href: string
}

/** ヘッダーのナビ項目。children を持たせるとドロップダウンになる */
export interface NavItem {
  label: string
  /** ドロップダウンの親（children あり）では省略できる */
  href?: string
  children?: LinkItem[]
}

/** セクション見出し（英字ラベル + 見出し + リード文） */
export interface SectionHeading {
  eyebrow: string
  title: string
  lead?: string
}

/** ボタン */
export interface ButtonItem extends LinkItem {
  variant?: 'solid' | 'outline'
}

/** 数値実績（16社 / 7業界+ など） */
export interface Stat {
  value: string
  unit?: string
  label: string
}

/** グラデーションカード（強み・哲学・支援メニューなど） */
export interface AccentCard {
  accent: AccentKey
  /** ドットの2色目。省略時は accent とペアの色を自動採用 */
  accentPair?: AccentKey
  eyebrow?: string
  title: string
  body: string
  /** カード下部の補足行 */
  footnote?: string
  href?: string
  linkLabel?: string
  /** 先頭に2色の丸アイコンを表示するか */
  dots?: boolean
}

/** 罫線区切りの支援メニュー1件 */
export interface MenuRow {
  accent: AccentKey
  accentPair: AccentKey
  title: string
  body: string
  meta: string
}

/** WORKS 上部の数値タイル */
export interface WorkStat {
  label: string
  /** 数字はカウントアップ演出の対象になる */
  value: number
  unit: string
  /** 「2年1ヶ月」のように数字が2つ並ぶ場合の2つめ */
  value2?: number
  unit2?: string
  note: string
  /** アクセント色地の反転表示にする */
  featured?: boolean
}

/**
 * 開発事例1件（WORKS の1行）。
 * 守秘義務のため取引先名は伏せ、業種・支援内容・期間のみ掲載する。
 */
export interface WorkRow {
  /** 英字ラベル（SI / ENTERPRISE など） */
  category: string
  /** 伏せた取引先の呼称（システムインテグレーター など） */
  client: string
  /** 絞り込みの「業種」 */
  industry: string
  /** 絞り込みの「技術・テーマ」 */
  tags: string[]
  body: string
  /** 支援月数。期間表記と期間バーの長さはここから計算する */
  months: number
  /** 開始年 */
  start: number
  /** 終了年。継続中は省略する */
  end?: number
}

/** 技術スタックの1グループ */
export interface StackGroup {
  accent: AccentKey
  label: string
  items: StackItem[]
}

/** 技術スタックの1項目。icon は simpleicons のスラッグ */
export interface StackItem {
  name: string
  /** https://cdn.simpleicons.org/<icon> のスラッグ */
  icon?: string
  /** アイコンを黒で描画する（明るいブランドカラー対策） */
  darkIcon?: boolean
  /** アイコンが無い場合、名前の先頭3文字を四角で表示する */
  fallback?: 'text'
}

/** 罫線区切りのステップ（4カラム） */
export interface Step {
  step: string
  title: string
  body: string
}

/** 上端にグラデーションバーが乗るステップ（PROCESS） */
export interface ProcessStep extends Step {
  from: AccentKey
  to: AccentKey
}

/** よくあるご質問 */
export interface Faq {
  question: string
  answer: string
}

/** お知らせ */
export interface NewsItem {
  /** YYYY.MM.DD または YYYY.MM */
  date: string
  category: string
  title: string
  body?: string
  href?: string
  picture?: Picture
}

/** 自社プロダクト */
export interface Product {
  label: string
  title: string
  body: string
  href?: string
  linkLabel?: string
  picture: Picture
  /** 画像を右側に配置する */
  reverse?: boolean
}

/** 経営メンバー */
export interface Member {
  role: string
  name: string
  body: string
  picture: Picture
}

/** 会社概要の1行 */
export interface CompanyRow {
  label: string
  /** 改行は配列で表現する */
  value: string[]
}

/** 行動指針（omeload）の1項目 */
export interface Guideline {
  title: string
  body: string
}
