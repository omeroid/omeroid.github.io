/** サービス一覧ページ（/service/）のコンテンツ */
import type { AccentCard, ServiceProgram } from '~/types'
import { externalLinks } from './site'

export const serviceHero = {
  eyebrow: 'SERVICE',
  title: 'サービス',
  lead: 'コンサルタントとエンジニアが同じチームで動きます。業務を分解して直すべき工程を特定し、その工程に効くものを実際に作る。三つの入口から、いまの課題に合う形をお選びください。',
}

/** 常設の支援メニュー（それぞれの詳細ページへ送る） */
export const serviceCards: AccentCard[] = [
  {
    accent: 'orange',
    accentPair: 'amber',
    eyebrow: 'CONSULTING',
    title: 'コンサルティング',
    body: '事業計画から業務プロセスの設計まで。現場に入り、実行できる形まで一緒に落とし込みます。',
    href: '/consulting/',
    linkLabel: '詳しく見る',
    dots: true,
  },
  {
    accent: 'teal',
    accentPair: 'blue',
    eyebrow: 'IT / DEVELOPMENT',
    title: 'IT・システム開発',
    body: '要件定義から開発・運用まで。作るべきものの議論と実装が分断されない体制で進めます。',
    href: '/it/',
    linkLabel: '詳しく見る',
    dots: true,
  },
]

/** 単発メニュー。詳細は自社サイト外のLPに置いている */
export const servicePrograms: ServiceProgram[] = [
  {
    eyebrow: 'SPECIAL PROGRAM',
    title: 'AI導入支援',
    body: '業務を分解して直すべき工程を特定し、その工程に効くものを実際に作る Claude 導入プログラム。2ヶ月・30万円〜の単発メニューとしてご提供しています。',
    href: externalLinks.aiSupport,
    linkLabel: '専用サイトを見る',
  },
  {
    eyebrow: 'SPECIAL PROGRAM',
    title: '基幹システム刷新',
    body: 'パッケージを選ぶ前に、AI時代のあるべき業務像から設計する。構想・ベンダー選定・PMO・自走体制づくりまで、ベンダーフリーの立場で一気通貫に伴走します。',
    href: externalLinks.coreSystem,
    linkLabel: '専用サイトを見る',
  },
]
