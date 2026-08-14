/** IT・システム開発ページのコンテンツ */
import type { MenuRow, SectionHeading } from '~/types'

export const itHero = {
  eyebrow: 'IT CONSULTING & ENGINEERING',
  title: ['ビジネスを支えるITパートナーになれる開発会社。'],
  lead: '要件が固まっていなくても大丈夫です。事業の課題を整理するところから、設計・フルスクラッチ開発・運用まで、同じチームが最後まで担当します。またシステムは一度作って終わりではありません。ビジネスの変革に伴い常に改善・改修を繰り返す必要があります。omeroidはビジネスの変革をパートナーとしてサポートします。',
  cta: { label: '無料で相談する', href: '/contact/' },
  ctaNote: 'まずは30分。要件が曖昧な段階のご相談が最も多いです。',
}

/** ISSUES（こんなご相談をいただいています） */
export const itIssues = {
  heading: {
    eyebrow: 'ISSUES',
    title: 'こんなご相談をいただいています',
  } satisfies SectionHeading,
  items: [
    '「ITを活用したいが、何から手をつければいいか分からない」',
    '「ベンダー任せになっていて、提案が適切なのか判断できない」',
    '「既存システムが使いにくいが、改修費用に見合うのか分からない」',
    '「フルスクラッチの開発を、要件定義からまとめて任せたい」',
    '「社内にリードエンジニアがいない。将来は内製化したい」',
    '「既存システムの運用保守を、任せられる会社に変えたい」',
  ],
}

/** MENU（5つの支援メニュー） */
export const itMenuHeading: SectionHeading = {
  eyebrow: 'MENU',
  title: '5つの支援メニュー',
  lead: '単発でも、上流から運用まで通しでも。必要な範囲だけを切り出してご依頼いただけます。',
}

export const itMenu: MenuRow[] = [
  {
    accent: 'orange',
    accentPair: 'amber',
    title: 'IT戦略策定',
    body: '現状のIT利用状況や目標・課題を整理し、今後のIT戦略策定を支援します。投資すべき領域と、今はやらない領域を切り分けます。',
    meta: '1–3 MONTHS ／ 現状整理・IT戦略・ロードマップ',
  },
  {
    accent: 'amber',
    accentPair: 'green',
    title: '社内DX推進',
    body: 'DXへの第一歩として、社内で利用する業務ツールの整理と乗り換えを支援します。つくらずに解決できるなら、そう提案します。',
    meta: '1–6 MONTHS ／ ツール選定・移行計画・定着支援',
  },
  {
    accent: 'teal',
    accentPair: 'blue',
    title: 'システム開発',
    body: '要件定義・設計・開発・テストまで、システム開発全般を支援します。ほとんどの案件がフルスクラッチのため、こだわりを実現できます。',
    meta: '3+ MONTHS ／ 要件定義書・設計書・システム一式',
  },
  {
    accent: 'blue',
    accentPair: 'purple',
    title: '内製化支援',
    body: '開発をリードしながら、社内メンバーの育成を支援します。私たちがいなくても回る状態を、ゴールに置きます。',
    meta: '6+ MONTHS ／ 開発体制・レビュー文化・技術標準',
  },
  {
    accent: 'green',
    accentPair: 'teal',
    title: '運用・保守',
    body: '開発後の運用保守はもちろん、他社が開発したシステムの引き継ぎにも対応します。',
    meta: 'CONTINUOUS ／ 監視・改善・障害対応体制',
  },
]
