/** STRENGTH（選ばれている4つの理由）— IT事業ページで使用 */
import type { AccentCard, SectionHeading } from '~/types'

export const strengthHeading: SectionHeading = {
  eyebrow: 'STRENGTH',
  title: '選ばれている4つの理由',
  lead: '私たちのゴールは、システムの提供ではなく、ビジネスのアップデートです。',
}

export const strengthCards: AccentCard[] = [
  {
    accent: 'orange',
    accentPair: 'amber',
    title: 'ビジネス課題に合わせた解決方法',
    body: '画一的なパッケージではなく、企業ごとの課題に合わせて柔軟に最適なソリューションを提供します。つくらないほうが早いなら、そう申し上げます。',
    dots: true,
  },
  {
    accent: 'teal',
    accentPair: 'green',
    title: '一気通貫のフルスクラッチ開発',
    body: 'グランドデザインから保守運用まで全ての工程を自社で担当。基本はフルスクラッチのため、既製品では諦めていた要望やこだわりも実現できます。',
    dots: true,
  },
  {
    accent: 'blue',
    accentPair: 'purple',
    title: '未来を見据えた技術選定と構成',
    body: '「システムは長期的に育てていくもの」という認識のもと、拡張・仕様変更・保守運用に苦労しない構成を採用。ロックインにならないよう、オープンな技術のみを選びます。',
    dots: true,
  },
  {
    accent: 'green',
    accentPair: 'teal',
    title: '多種多様な開発の実績',
    body: 'ブラウザアプリ、モバイルアプリ、ブロックチェーン、基幹システムまで。業種・種類を問わず16社のシステム開発を担ってきました。',
    dots: true,
  },
]
