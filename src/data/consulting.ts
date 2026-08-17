/** コンサルティングページのコンテンツ */
import type {
  AccentCard,
  Faq,
  MenuRow,
  Picture,
  ProcessStep,
  SectionHeading,
  WorkRow,
  WorkStat,
} from '~/types'
import { externalLinks } from './site'

import caseImage from '~/assets/images/consulting/contents-case.webp'
import reportImage from '~/assets/images/consulting/contents-report.webp'

export const consultingHero = {
  eyebrow: 'STRATEGY & BUSINESS CONSULTING',
  title: ['絵を描くだけで、', '終わらせない。'],
  lead: '新規・既存事業を問わず、幅広い業界の経営・業務戦略、DX・AI戦略のテーマで伴走・サポートいたします。また、DX・AI推進において戦略のみならず、システム設計・開発支援も行っています。',
  cta: { label: '無料で相談する', href: '/contact/' },
  ctaNote: 'まずは30分。構想段階の壁打ちだけでも歓迎です。',
}

/** ISSUES（こんなご相談をいただいています） */
export const consultingIssues = {
  heading: {
    eyebrow: 'ISSUES',
    title: 'こんなご相談をいただいています',
  } satisfies SectionHeading,
  items: [
    '「技術や競合の変化は感覚で掴んでいるが、効果的な戦略が決まらない」',
    '「新規事業のアイデアはあるが、事業として成り立つのか判断できない」',
    '「顧客への適切なコミュニケーションが分からず、営業組織のPDCAが回らない」',
    '「データの活用方針が定まらない。蓄積データが未整備で分析できない」',
    '「DXを掲げているが、業務・組織のあるべき姿から描き直したい」',
    '「全体像設計はできたものの、実行フェーズで止まってしまった」',
  ],
}

/** MENU（3つの支援メニュー） */
export const consultingMenuHeading: SectionHeading = {
  eyebrow: 'MENU',
  title: '3つの支援メニュー',
  lead: '単発の調査・壁打ちから、実行フェーズまでの伴走まで。必要な範囲だけを切り出してご依頼いただけます。',
}

export const consultingMenu: MenuRow[] = [
  {
    accent: 'orange',
    accentPair: 'amber',
    title: '経営・業務戦略',
    body: 'インタビュー・調査を通じて、既存事業の方針検討や、新規事業のビジネスモデル・将来像設計を支援します。あるべき業務・組織像の設計まで踏み込み、進める領域と今はやらない領域を切り分けます。',
    meta: '2–6 MONTHS ／ 現状分析・事業戦略・業務設計・ロードマップ',
  },
  {
    accent: 'teal',
    accentPair: 'green',
    title: 'DX・AI戦略',
    body: 'このテーマだけは、戦略だけで終わりません。デジタル化・AI活用の方針設計から、業務システムの設計・開発まで、社内のエンジニアチームがそのまま引き継いで形にします。',
    meta: '6+ MONTHS ／ DX・AI活用方針・システム設計・開発',
  },
  {
    accent: 'blue',
    accentPair: 'purple',
    title: 'データ戦略',
    body: 'データの蓄積・分析・活用における将来像の設計とロードマップ策定を支援します。基盤づくりが必要な場合は、社内のエンジニアチームがそのまま実装まで担います。',
    meta: '2–6 MONTHS ／ 活用方針・データ整備計画・基盤設計',
  },
]

/** STRENGTH（選ばれている4つの理由） */
export const consultingStrengthHeading: SectionHeading = {
  eyebrow: 'STRENGTH',
  title: '選ばれている4つの理由',
  lead: '私たちのゴールは、提案書の納品ではなく、事業が前に進んでいる状態です。',
}

export const consultingStrengthCards: AccentCard[] = [
  {
    accent: 'orange',
    accentPair: 'amber',
    title: 'ITエンジニアとの一気通貫支援',
    body: '企画設計（Strategy）とシステム開発（Engineering）を一気通貫で支援。ビジネス観点とシステム観点の両面を加味した、実現可能な提案ができます。',
    dots: true,
  },
  {
    accent: 'teal',
    accentPair: 'green',
    title: '実行フェーズまで伴走',
    body: '戦略を描いて終わりにしません。推進のハンズオン支援まで同じチームが担当し、打ち手が回りはじめるところまで見届けます。',
    dots: true,
  },
  {
    accent: 'blue',
    accentPair: 'purple',
    title: '広範囲の業界での実績',
    body: '製造・流通・ヘルスケア・HR領域から自治体支援まで。業界特性を踏まえた戦略設計の知見を蓄積しています。',
    dots: true,
  },
  {
    accent: 'green',
    accentPair: 'teal',
    title: '必要な範囲だけを依頼できる',
    body: '大がかりな契約は前提にしません。単発の市場調査や壁打ちだけ、実行支援だけ、といった切り出し方にも対応します。',
    dots: true,
  },
]

/**
 * WORKS（コンサルティングの実績）
 *
 * works.ts と同じく freee の請求データ（2019-02-28 〜 2026-08-31 /
 * 取引先一覧_部門別.csv）のコンサル部門を出典とする。実績対象外の1件を除いた
 * 22社が母数で、3ヶ月以上の19社を一覧に載せ、1〜2ヶ月の短期3社は footnote に
 * まとめている。守秘義務のため取引先名・案件名は伏せ、業種・支援内容のみ掲載する。
 *
 * IT側（works.ts）と違い、支援期間は見せない（`Works` に layout="cards" を渡す）。
 * そのため WorkRow の months / start / end は持たせない。
 */
export const consultingWorksHeading: SectionHeading = {
  eyebrow: 'WORKS',
  title: 'コンサルティングの実績',
  lead: '2019年から現在まで、業界を問わず中長期経営戦略・新規事業立案・業務／組織設計に伴走してきました。提案書で終わらせず、実行フェーズまで同じチームで見届けています。',
}

export const consultingWorkStats: WorkStat[] = [
  {
    label: 'PROJECTS',
    value: 50,
    suffix: '+',
    unit: '件',
    note: 'これまでに支援したプロジェクト数（2019年〜）',
  },
  {
    label: 'INDUSTRIES',
    value: 7,
    unit: '業種',
    note: '製造・流通・ヘルスケア・公共など',
    featured: true,
  },
]

export const consultingWorksListHeading = {
  title: '主なプロジェクト事例',
  range: '2019 — 2026',
}

export const consultingWorksFilterLabels = {
  lead: '分類から絞り込む',
  all: 'すべて表示',
  industry: { no: '01', label: '業種', en: 'INDUSTRY' },
  tag: { no: '02', label: 'テーマ', en: 'THEME' },
}

export const consultingWorks: WorkRow[] = [
  {
    category: 'CONSULTING FIRM',
    client: '経営コンサルティング企業',
    industry: '専門サービス',
    tags: ['事業戦略', '業務設計'],
    body: 'エンドクライアント向けの事業計画策定とプロジェクト推進、商品企画チームの運営支援、会計システム刷新に向けた現行業務の整理まで。',
  },
  {
    category: 'HR / MEDIA',
    client: '大手人材サービス企業',
    industry: 'サービス',
    tags: ['営業・マーケティング', '組織設計'],
    body: '人材派遣領域を担う事業ユニットの戦略検討と付帯業務を、マネージャー・コンサルタントの複数名体制で支援。',
  },
  {
    category: 'DX CONSULTING',
    client: '戦略・DXコンサルティング企業',
    industry: '専門サービス',
    tags: ['DX推進', 'PMO'],
    body: 'DXプロジェクトのPMO支援を中心に、財務業務の分析と将来像設計、基幹システム更改の伴走支援まで。',
  },
  {
    category: 'PHARMA DISTRIBUTION',
    client: '医療用医薬品の大手卸売企業',
    industry: '卸売・小売',
    tags: ['事業戦略', '新規事業'],
    body: '再生医療・予防医療・美容医療・動物医療の各領域で、事業戦略の設計から新規事業の検討・推進までを継続支援。',
  },
  {
    category: 'NEW BUSINESS',
    client: '新規事業支援の経営コンサルティング企業',
    industry: '専門サービス',
    tags: ['新規事業', '事業戦略'],
    body: 'ヘルスケア領域の新規事業開発に参画。戦略策定からMVP検証の詳細設計、規制対応のディレクションまで。',
  },
  {
    category: 'PUBLIC / REGION',
    client: '地域振興に取り組む公共施設運営団体',
    industry: '公共',
    tags: ['人材育成', '地域振興'],
    body: '地域のIT人材育成を目的としたハッカソンの企画・運営支援。講師・進行支援や開発環境の提供も担当。',
  },
  {
    category: 'INDUSTRIAL TRADE',
    client: '建築設備・管工機材の卸売企業',
    industry: '卸売・小売',
    tags: ['DX推進', '業務設計'],
    body: 'DX・システムの将来像設計から構築支援までをフェーズを分けて推進し、業務・システム改革の全体構想づくりを支援。',
  },
  {
    category: 'REAL ESTATE',
    client: '不動産の売買・仲介企業',
    industry: '不動産',
    tags: ['新規事業', '営業・マーケティング'],
    body: '独自の専門人材認定制度の設計と認知拡大の助言、会員向けコミュニティアプリの運用管理まで。',
  },
  {
    category: 'FINANCIAL ADVISORY',
    client: '中小企業向け財務コンサルティング企業',
    industry: '専門サービス',
    tags: ['DX推進'],
    body: 'IT領域の顧問としてマネージャーが継続参画し、IT活用に関する助言を月次で提供。',
  },
  {
    category: 'MATCHING SAAS',
    client: 'ビジネスマッチングSaaS運営企業',
    industry: '情報通信',
    tags: ['調査・分析', '新規事業'],
    body: 'M&A・事業承継領域のレポート作成支援を中心に、複数のクライアント企業へのプロジェクト支援を提供。',
  },
  {
    category: 'HR SERVICE',
    client: '人材紹介・HR領域のサービス企業',
    industry: 'サービス',
    tags: ['営業・マーケティング', '業務設計'],
    body: '営業企画・推進の支援に加え、データ活用組織の効率化や依頼受付フローの設計まで、営業と組織運営の両面から改革を支援。',
  },
  {
    category: 'MANUFACTURING',
    client: 'プラスチック製品の製造業企業',
    industry: '製造',
    tags: ['業務設計', '基幹刷新構想'],
    body: '生産管理システム刷新の方針検討から、周辺システムの要件定義・設計、RFP作成・パッケージ選定まで。',
  },
  {
    category: 'GLOBAL CONSULTING',
    client: '大手総合コンサルティングファーム',
    industry: '専門サービス',
    tags: ['調査・分析'],
    body: '次世代通信領域における国際標準化の事例調査と、国際標準化機関での標準化活動の推進支援。',
  },
  {
    category: 'TRADING COMPANY',
    client: '鉄鋼・食糧などを扱う大手総合商社',
    industry: '卸売・小売',
    tags: ['業務設計', '基幹刷新構想'],
    body: '基幹システム刷新に向けた業務分析。現行業務の整理・分析で検討に必要な業務要件を可視化。',
  },
  {
    category: 'BUILDING SERVICE',
    client: '総合ビルメンテナンス・建物管理企業',
    industry: 'サービス',
    tags: ['基幹刷新構想'],
    body: '基幹システム見直しの診断と再計画から、要件整理を踏まえたRFP作成・ベンダー選定まで段階的に支援。',
  },
  {
    category: 'DATA STRATEGY',
    client: 'DX・デジタル領域のコンサルティング企業',
    industry: '専門サービス',
    tags: ['データ戦略', '新規事業'],
    body: '大手メディア企業のデータガバナンス構築PMO支援、データ利活用会議の運営支援、合弁会社の設立支援。',
  },
  {
    category: 'HR / MEDIA',
    client: '人材・情報メディア領域の大手サービス企業',
    industry: 'サービス',
    tags: ['営業・マーケティング'],
    body: '事業統合に伴う営業推進の支援に複数名体制で参画し、営業活動の推進と付帯業務の設計・実行を支援。',
  },
  {
    category: 'RESEARCH',
    client: '人材紹介・コンサルティング企業',
    industry: 'サービス',
    tags: ['調査・分析'],
    body: '官公庁向けの調査請負プロジェクトに参画し、次世代通信技術の国際標準化動向や市場動向の調査・分析を担当。',
  },
  {
    category: 'CORPORATE',
    client: 'AI・システム開発のIT企業',
    industry: '情報通信',
    tags: ['業務設計'],
    body: 'クライアント企業向けのコーポレート機能整備プロジェクトに参画し、管理部門の機能・業務基盤づくりを支援。',
  },
]

export const consultingWorksFootnotes: string[] = [
  '上記のほか、短期プロジェクト（市場調査・営業資料の強化・研修講師など）を3社で実施しています。',
  '※ 2019年3月〜2026年8月の実績にもとづきます。取引先名・案件名は守秘義務のため掲載していません。詳細は個別のご相談時に、お伝えできる範囲でご説明します。',
]

/** PROCESS（支援の進め方） */
export const consultingProcessHeading: SectionHeading = {
  eyebrow: 'PROCESS',
  title: '支援の進め方',
  lead: '最初の相談から、実行が回りはじめるまで。標準は3〜6ヶ月ですが、単発の調査・壁打ちだけでもお受けしています。',
}

export const consultingProcessSteps: ProcessStep[] = [
  {
    step: 'STEP 01',
    title: '現状把握',
    body: '経営層・現場へのインタビューと既存資料の読み込みで、論点を洗い出します。',
    from: 'orange',
    to: 'amber',
  },
  {
    step: 'STEP 02',
    title: '調査・分析',
    body: '市場・競合・データを調べ、事実で仮説を検証。判断材料を揃えます。',
    from: 'amber',
    to: 'green',
  },
  {
    step: 'STEP 03',
    title: '戦略・計画策定',
    body: '実行できる粒度まで落とした打ち手とロードマップを、一緒に決めます。',
    from: 'green',
    to: 'teal',
  },
  {
    step: 'STEP 04',
    title: '実行・実装',
    body: '推進のハンズオン支援。システムが必要なら、社内の開発チームがそのまま作ります。',
    from: 'teal',
    to: 'blue',
  },
]

/** ステップの下に並ぶお約束 */
export const consultingProcessPromises = [
  {
    title: '論点から先に合わせます',
    body: '分析に入る前に、何を決めるための検討なのかを合意します。目的のない資料はつくりません。',
  },
  {
    title: '実行できる粒度まで落とします',
    body: '誰が・いつ・何をするかまで書き切った計画にします。抽象度の高い提言で終わらせません。',
  },
  {
    title: '良きパートナーになります',
    body: '受発注の関係ではなく、事業を一緒に前に進める相手として信頼関係を築きます。',
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
      picture: {
        image: caseImage,
        alt: 'ホワイトボードを囲んで議論する打ち合わせ風景',
      } satisfies Picture,
    },
    {
      title: 'レポート一覧',
      body: '業界動向やテーマ別の調査レポートを、随時公開しています。',
      href: externalLinks.consultingReports,
      picture: {
        image: reportImage,
        alt: '机に並べた調査レポートの資料',
      } satisfies Picture,
    },
  ],
}

/** FAQ（コンサルティング固有。IT事業ページとは設問が異なる） */
export const consultingFaqs: Faq[] = [
  {
    question: '課題が漠然としている段階でも相談できますか？',
    answer:
      'はい。むしろその段階のご相談が最も多いです。何を論点にすべきかの整理から一緒に行います。',
  },
  {
    question: '費用と期間の目安を教えてください。',
    answer:
      '支援範囲・体制・期間によって大きく異なるため、ヒアリングのうえ個別にお見積りします。標準は3〜6ヶ月ですが、単発の調査・壁打ちのみのご依頼も可能です。',
  },
  {
    question: '戦略の策定だけでなく、実行まで任せられますか？',
    answer:
      'はい。推進のハンズオン支援まで対応します。システムが必要になった場合も、社内のエンジニアチームがそのまま設計・開発を担います。',
  },
  {
    question: '経験のない業界でも支援してもらえますか？',
    answer:
      '製造・流通・ヘルスケア・HR・自治体支援など幅広い実績があります。未経験の業界でも、調査とインタビューで前提を押さえてから議論を始めます。',
  },
  {
    question: 'リモートでも対応してもらえますか？',
    answer:
      'はい。東京・和歌山の2拠点を軸に、オンライン中心で全国のお客様を支援しています。必要に応じて訪問も行います。',
  },
]
