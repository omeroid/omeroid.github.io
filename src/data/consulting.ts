/** コンサルティングページのコンテンツ */
import type { AccentCard, Picture, SectionHeading, Stat, Step } from '~/types'
import { externalLinks } from './site'

import consultantImage from '~/assets/images/consulting/teamwork-in-a-office.jpeg'
import caseImage from '~/assets/images/consulting/consulting_sample.png'
import reportImage from '~/assets/images/consulting/report.jpeg'

export const consultingHero = {
  eyebrow: 'STRATEGY & BUSINESS CONSULTING',
  title: ['絵を描くだけで、', '終わらせない。'],
  lead: '新規・既存事業を問わず、ビジネス戦略・営業/マーケティング戦略・データ戦略の3テーマで伴走します。エンジニアが同じ社内にいるからこそ、実装可能な戦略を描けます。',
  cta: { label: '無料で相談する', href: '/contact/' },
  ctaNote: 'まずは30分。構想段階の壁打ちだけでも歓迎です。',
  picture: {
    image: consultantImage,
    alt: 'ディスカッション／ワークショップの様子',
  } satisfies Picture,
}

export const consultingStats: Stat[] = [
  { value: '3', unit: 'テーマ', label: 'STRATEGY / SALES / DATA' },
  { value: '5', unit: '業界+', label: 'MANUFACTURING TO PUBLIC' },
  { value: '構想〜実装', label: 'END TO END' },
  { value: '自社', unit: '開発', label: 'NO HAND-OFF' },
]

/** SUPPORT THEMES（3つのテーマ） */
export const themesHeading: SectionHeading = {
  eyebrow: 'SUPPORT THEMES',
  title: '3つのテーマで伴走します',
  lead: 'どのテーマも、単発の提案書で終わらせません。実行の段階まで同じチームで見届けます。',
}

export const themes: AccentCard[] = [
  {
    accent: 'orange',
    eyebrow: '01',
    title: 'Business Strategy',
    body: 'インタビュー・調査を通じて、既存事業の方針検討や、新規事業のビジネスモデル・将来像設計を支援します。',
    footnote:
      '「技術や競合の変化は感覚で掴んでいるが、効果的な戦略が決まらない」に',
  },
  {
    accent: 'teal',
    eyebrow: '02',
    title: 'Sales & Marketing',
    body: '既存事業の営業・マーケティングの設計と推進を支援。新規開拓・LTV向上に向けた打ち手を、実行体制ごと整えます。',
    footnote:
      '「適切なコミュニケーションが分からない」「営業組織のPDCAが回らない」に',
  },
  {
    accent: 'blue',
    eyebrow: '03',
    title: 'Data Strategy',
    body: 'データの蓄積・分析・活用における将来像の設計とロードマップ策定を支援します。',
    footnote: '「活用方針が定まらない」「蓄積データが未整備で分析できない」に',
  },
]

/** 4つめのテーマ（DX）— 破線の横長ボックス */
export const dxTheme = {
  eyebrow: '04 / DX',
  title: 'デジタル化・DX推進',
  body: 'このテーマだけは、戦略だけで終わりません。あるべき業務・組織像の設計から、業務システムの設計・開発まで、社内のエンジニアチームがそのまま引き継いで形にします。',
}

/** テーマの下に置く2つの特徴 */
export const consultingFeatures = [
  {
    title: 'ITエンジニアとの一気通貫支援',
    body: '企画設計（Strategy）とシステム開発（Engineering）を一気通貫で支援。ビジネス観点とシステム観点の両面を加味した提案が可能です。',
  },
  {
    title: '広範囲の業界での実績',
    body: '製造・流通・ヘルスケア・HR領域、自治体支援まで。幅広い業界での戦略設計の知見があります。',
  },
]

/** TRACK RECORD（支援実績） */
export const trackRecord = {
  heading: {
    eyebrow: 'TRACK RECORD',
    title: '支援実績',
  } satisfies SectionHeading,
  industries: {
    label: 'BY INDUSTRY ／ 業界別',
    items: [
      '製造',
      '流通・卸売',
      'ヘルスケア',
      'HR',
      'SaaS・Webサービス',
      '金融',
      '自治体・公共',
    ],
  },
  themes: {
    label: 'BY THEME ／ テーマ別',
    items: [
      '中長期経営戦略',
      '業務・組織設計',
      'デジタル化・DX設計',
      '業務システム設計',
      '新規事業立案',
      'MVP・PoC構築',
      '市場調査・分析',
    ],
  },
  cases: [
    {
      client: '大手卸売企業',
      body: '新規市場参入に向けたマッチングプラットフォーム事業の検討から構築支援まで。',
    },
    {
      client: 'SaaS事業者',
      body: '新事業検討・事業戦略の立案を支援。市場調査からプロダクト設計まで一貫して伴走。',
    },
    {
      client: '製造・流通企業',
      body: '中長期経営戦略から、あるべき業務・組織像とデジタル化の設計まで。',
    },
  ],
}

/** HOW WE WORK（進め方） */
export const consultingStepsHeading: SectionHeading = {
  eyebrow: 'HOW WE WORK',
  title: '進め方',
  lead: '最初の相談から、実行が回りはじめるまで。標準は3〜6ヶ月ですが、単発の調査・壁打ちだけでもお受けしています。',
}

export const consultingSteps: Step[] = [
  {
    step: 'STEP 01',
    title: '現状把握',
    body: '経営層・現場へのインタビューと既存資料の読み込みで、論点を洗い出します。',
  },
  {
    step: 'STEP 02',
    title: '調査・分析',
    body: '市場・競合・データを調べ、事実で仮説を検証。判断材料を揃えます。',
  },
  {
    step: 'STEP 03',
    title: '戦略・計画策定',
    body: '実行できる粒度まで落とした打ち手とロードマップを、一緒に決めます。',
  },
  {
    step: 'STEP 04',
    title: '実行・実装',
    body: '推進のハンズオン支援。システムが必要なら、社内の開発チームがそのまま作ります。',
  },
]

/** CONTENTS（事例とレポート） */
export const consultingContents = {
  heading: {
    eyebrow: 'CONTENTS',
    title: '事例とレポート',
  } satisfies SectionHeading,
  items: [
    {
      title: 'コンサルティング事例紹介',
      body: 'どんな課題に、どう入って、何が変わったか。実際のプロジェクトを公開しています。',
      href: externalLinks.consultingCases,
      picture: { image: caseImage, alt: '打ち合わせ風景' } satisfies Picture,
    },
    {
      title: 'レポート一覧',
      body: '業界動向やテーマ別の調査レポートを、随時公開しています。',
      href: externalLinks.consultingReports,
      picture: { image: reportImage, alt: 'レポート資料' } satisfies Picture,
    },
  ],
}
