/**
 * サイト全体の設定・ナビゲーション・外部リンク。
 * 新しいページを追加したら nav / footer にも追記する。
 */
import type { LinkItem, NavItem } from '~/types'

export const site = {
  name: 'omeroid株式会社',
  nameEn: 'omeroid Inc.',
  title: 'omeroid株式会社',
  tagline: '個性を重ねて、新しい価値を世の中に提供する。',
  description:
    'omeroid（オメロイド）株式会社は、戦略・業務コンサルティングとITコンサルティング・フルスクラッチのシステム開発を一気通貫で提供します。',
  url: 'https://www.omeroid.com',
  locale: 'ja_JP',
  /** Google Analytics 4 の測定ID。空にすると計測タグを出力しない */
  gaId: 'G-ECYH2GSXFH',
  email: 'inquiry@omeroid.com',
} as const

/** 外部サービスのURL */
export const externalLinks = {
  companyBlog: 'https://note.com/omeroid',
  techBlog: 'https://zenn.dev/p/omeroid',
  recruit: 'https://www.wantedly.com/companies/company_5409883',
  /** AI導入支援（Claude導入プログラム）の専用LP */
  aiSupport: 'https://lp.omeroid.com/ai-implementation-support/',
  /** 基幹システム刷新支援の専用LP */
  coreSystem: 'https://consulting.omeroid.com/core-system/',
  shop: 'https://omeroid.booth.pm',
  facebook: 'https://www.facebook.com/omeroid',
  privacyPolicy:
    'https://omeroid.notion.site/e6608dcc19e3414aa7458e0a6bf00145?pvs=4',
  securityPolicy:
    'https://omeroid.notion.site/141be5a46ca842dab09bc66fbc965bd2?pvs=4',
  consultingCases:
    'https://omeroid.notion.site/c97db77827754002a0256400e04654a2',
  consultingReports:
    'https://omeroid.notion.site/1fb26d41019d804ba455fd8c1602611f?v=1fb26d41019d8041a5de000c1e073b58',
} as const

/** ヘッダーのグローバルナビ。children を付けるとドロップダウンになる */
export const nav: NavItem[] = [
  { label: 'ホーム', href: '/' },
  {
    label: 'サービス',
    children: [
      { label: 'サービス一覧', href: '/service/' },
      { label: 'コンサルティング', href: '/consulting/' },
      { label: 'IT・システム開発', href: '/it/' },
      { label: 'AI導入支援', href: externalLinks.aiSupport },
      { label: '基幹システム刷新', href: externalLinks.coreSystem },
    ],
  },
  { label: 'プロダクト', href: '/product/' },
  {
    label: 'コンテンツ',
    children: [
      { label: 'コンサルティング記事一覧', href: '/insights/' },
      { label: 'Company Blog', href: externalLinks.companyBlog },
      { label: 'Tech Blog', href: externalLinks.techBlog },
    ],
  },
  { label: '採用情報', href: externalLinks.recruit },
  {
    label: '会社情報',
    children: [
      { label: '会社概要', href: '/company/' },
      { label: 'お知らせ', href: '/news/' },
      { label: 'プライバシーポリシー', href: externalLinks.privacyPolicy },
      { label: '情報セキュリティ方針', href: externalLinks.securityPolicy },
    ],
  },
]

/** ヘッダー右端のCTA */
export const headerCta: LinkItem = {
  label: 'お問い合わせ',
  href: '/contact/',
}

/** フッターのリンク列 */
export const footerColumns: { label: string; links: LinkItem[] }[] = [
  {
    label: 'SERVICE',
    links: [
      { label: 'サービス一覧', href: '/service/' },
      { label: 'コンサルティング', href: '/consulting/' },
      { label: 'IT・システム開発', href: '/it/' },
      { label: 'プロダクト', href: '/product/' },
    ],
  },
  {
    label: 'COMPANY',
    links: [
      { label: '会社概要・理念', href: '/company/' },
      { label: 'お知らせ', href: '/news/' },
      { label: '採用情報', href: externalLinks.recruit },
      { label: 'お問い合わせ', href: '/contact/' },
    ],
  },
  {
    label: 'CONTENTS',
    links: [
      { label: 'コンサルティング記事一覧', href: '/insights/' },
      { label: 'Company Blog', href: externalLinks.companyBlog },
      { label: 'Tech Blog', href: externalLinks.techBlog },
    ],
  },
]

/** フッター最下部のポリシー等 */
export const footerMeta: LinkItem[] = [
  { label: 'プライバシーポリシー', href: externalLinks.privacyPolicy },
  { label: '情報セキュリティ方針', href: externalLinks.securityPolicy },
]

/** 加入団体（会社概要ページの MEMBERSHIPS 行で使用） */
export const memberships: string[] = [
  '特定非営利活動法人金融ＩＴ協会®（FITA）',
  '一般社団法人アジア経営者連合会',
  '一般社団法人東京ニュービジネス協議会',
  '東京城西ロータリークラブ',
]
