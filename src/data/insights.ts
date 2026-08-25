/**
 * コンサルティング記事（INSIGHTS）。新しいものを配列の先頭に追加する。
 * コンサルティングページの CONTENTS セクションには先頭 consultingInsightCount 件だけ出す。
 *
 * ※ 現在の記事はデザインから起こした差し替え待ちの仮データ。
 *    公開先が決まったら title / date / href を実物に置き換える
 *    （href を省略した項目はリンクにならず、行だけが表示される）。
 */
import type { InsightItem, SectionHeading } from '~/types'

/** コンサルティングページの CONTENTS セクションに出す件数 */
export const consultingInsightCount = 4

/** 一覧ページのヒーロー */
export const insightsHero = {
  eyebrow: 'INSIGHTS',
  title: 'コンサルティング記事一覧',
  lead: 'DX・AI・事業戦略の現場で、私たちが繰り返し向き合ってきた論点を記事にまとめています。ご相談の前の判断材料としてお使いください。',
}

/** コンサルティングページ側の見出し（CONTENTS の後半に置く INSIGHTS ブロック） */
export const consultingInsightsHeading = {
  eyebrow: 'INSIGHTS',
  title: '現場で得た知見を、共有します。',
  lead: '支援の現場で繰り返し向き合ってきた論点を、記事として公開しています。ご相談の前の判断材料としてお使いください。',
} satisfies SectionHeading

/** 一覧ページの絞り込みラベル */
export const insightsFilterLabels = {
  all: 'すべて',
}

/** 一覧ページ下部のCTA帯 */
export const insightsCta = {
  title: '記事の続きは、対話で。',
  body: '自社に当てはめるとどうなるか。30分の壁打ちからお受けしています。',
  button: { label: '無料で相談する', href: '/contact/' },
}

export const insights: InsightItem[] = [
  {
    date: '2026.08.25',
    category: '準備中',
    title: '準備中',
  },

]

/** 絞り込みチップ。出現順に並べる（件数はチップに出さない） */
export const insightCategories = [
  ...new Set(insights.map((item) => item.category)),
]
