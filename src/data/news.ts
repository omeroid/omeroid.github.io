/**
 * お知らせ。新しいものを配列の先頭に追加する。
 * トップページには先頭 homeNewsCount 件だけ表示される。
 */
import type { NewsItem } from '~/types'
import { externalLinks } from './site'

import gasshuku2026Image from '~/assets/images/news/gasshuku2026.png'
import ryoko2024Image from '~/assets/images/news/ryoko2024.jpg'
import iso27001Image from '~/assets/images/iso27001.png'
import gasshuku2024Image from '~/assets/images/news/gasshuku2024.webp'
import travel2023Image from '~/assets/images/blog/travel2023.webp'
import officeTransferImage from '~/assets/images/blog/office_transfer.jpeg'
import wakayamaImage from '~/assets/images/blog/wakayama-advancement.png'
import travel2022Image from '~/assets/images/blog/travel2022.jpg'
import techBlogImage from '~/assets/images/news/omeroid-techblog.png'
import party2021Image from '~/assets/images/blog/party2021.jpg'
import dacImage from '~/assets/images/products/dac.png'
import newBusinessImage from '~/assets/images/blog/new-bisiness.png'
import travel2020Image from '~/assets/images/blog/travel2020.jpg'
import vulsImage from '~/assets/images/news/vuls-logo-large.png'

/** トップページに出す件数 */
export const homeNewsCount = 4

export const news: NewsItem[] = [
  {
    date: '2026.08',
    category: 'お知らせ',
    title: '基幹システム刷新支援の提供を開始しました',
    body: 'パッケージを選ぶ前に、AI時代のあるべき業務像から設計する基幹システム刷新支援を提供開始しました。構想・ベンダー選定・PMO・自走体制づくりまで、ベンダーフリーの立場で一気通貫に伴走します。',
    href: externalLinks.coreSystem,
  },
  {
    date: '2026.08',
    category: 'お知らせ',
    title: 'AI導入支援の提供を開始しました',
    body: '業務を分解して直すべき工程を特定し、その工程に効くものを実際に作る Claude 導入プログラムを、2ヶ月・30万円〜の単発メニューとして提供開始しました。',
    href: externalLinks.aiSupport,
  },
  {
    date: '2026.05',
    category: 'ブログ',
    title: '社員合宿＠静岡三島',
    body: '入社1ヶ月のメンバーが、三島での社員合宿の様子をお届けします。',
    href: 'https://note.com/omeroid/n/n4c69c39ac9f0',
    picture: { image: gasshuku2026Image, alt: '社員合宿＠静岡三島' },
  },
  {
    date: '2026.01',
    category: 'お知らせ',
    title: '加入団体のお知らせ',
    body: 'omeroid（企業・メンバー）は、特定非営利活動法人金融ＩＴ協会®（FITA）、一般社団法人アジア経営者連合会、一般社団法人東京ニュービジネス協議会、東京城西ロータリークラブに加入しています。',
  },
  {
    date: '2024.10',
    category: 'ブログ',
    title: '社員旅行2024＠北海道',
    body: '今年はアンケートにより北海道に決定しました！',
    href: 'https://note.com/omeroid/n/n59af5f0f7e50',
    picture: { image: ryoko2024Image, alt: '社員旅行2024＠北海道' },
  },
  {
    date: '2024.06',
    category: 'プレスリリース',
    title: 'ISO27001を取得しました',
    body: '組織のデータをしっかりと守り、機密性・可用性・完全性を確保するために、国際規格（ISO/IEC 27001:2022）の認証を取得しました。',
    href: 'https://note.com/omeroid/n/n95fb9468a2e5',
    picture: { image: iso27001Image, alt: 'ISO27001の取得' },
  },
  {
    date: '2024.05',
    category: 'ブログ',
    title: '社員合宿＠静岡',
    body: '毎年の社員合宿、今年は静岡三島で行いました。',
    href: 'https://note.com/omeroid/n/nb731811b5ef6',
    picture: { image: gasshuku2024Image, alt: '社員合宿＠静岡' },
  },
  {
    date: '2023.11',
    category: 'ブログ',
    title: '社員旅行で初海外！＠明洞IN韓国！',
    body: '今年の社員旅行は、韓国に行ってきました！',
    href: 'https://note.com/omeroid/n/n4c6adddeaf46',
    picture: {
      image: travel2023Image,
      alt: '社員旅行で初海外！＠明洞IN韓国！',
    },
  },
  {
    date: '2023.04',
    category: 'ブログ',
    title: '東京・和歌山オフィスを移転しました',
    body: 'メンバーの増加や、より快適な仕事環境を作っていくために、東京と和歌山の両オフィスを移転しました。',
    href: 'https://note.com/omeroid/n/ne82d07ee750e',
    picture: {
      image: officeTransferImage,
      alt: '東京・和歌山オフィスを移転しました',
    },
  },
  {
    date: '2023.04',
    category: 'プレスリリース',
    title: 'omeroidは和歌山に進出します！',
    body: '和歌山にオフィスを構え、和歌山県・和歌山市と進出協定を調印させていただきました。',
    href: 'https://note.com/omeroid/n/n6ae1f089b2ba',
    picture: { image: wakayamaImage, alt: 'omeroidは和歌山に進出します' },
  },
  {
    date: '2022.11',
    category: 'ブログ',
    title: '社員旅行で福岡・博多に行ってみた！',
    body: '社員の目線から福岡社員旅行をお伝えします。',
    href: 'https://note.com/omeroid/n/n6d860d09725b',
    picture: {
      image: travel2022Image,
      alt: '社員旅行で福岡・博多に行ってみた！',
    },
  },
  {
    date: '2022.09',
    category: 'お知らせ',
    title: 'TECH BLOGを開設しました！',
    body: '社外の方々に弊社のやっていることや、採用している技術要素に興味を持っていただけるよう、TECH BLOGを始めることにしました。',
    href: 'https://zenn.dev/p/omeroid',
    picture: { image: techBlogImage, alt: 'TECH BLOG開設' },
  },
  {
    date: '2021.12',
    category: 'ブログ',
    title: '創立3周年記念パーティー開催してみた！',
    body: 'omeroid創立3周年と売上目標達成を記念してパーティーを行いました。',
    href: 'https://note.com/omeroid/n/nc70aa4880d8a',
    picture: { image: party2021Image, alt: '創立3周年記念パーティー' },
  },
  {
    date: '2021.01',
    category: 'プロダクト',
    title: '「進捗報告ツール dac」をリリースしました',
    body: 'リモート化でのOJTを助ける進捗報告サービスを提供。リモートで部下の状況がつかめていない、上司への報告がうまくいっていないという状況におすすめです。',
    href: 'https://www.dac-work.com',
    picture: { image: dacImage, alt: '進捗報告ツール dac' },
  },
  {
    date: '2020.11',
    category: 'ブログ',
    title: '新規事業への取り組みを始めました',
    body: 'メンバーからアイデアを募り、仮説検証スプリントを回して、新規事業を創造するプログラムをはじめました。',
    href: 'https://note.com/omeroid/n/n0e0cb1249d0e',
    picture: { image: newBusinessImage, alt: '新規事業への取り組み' },
  },
  {
    date: '2020.10',
    category: 'ブログ',
    title: '社員旅行2020',
    body: 'メンバー8名で社員旅行に行ってきた様子をお届けします。',
    href: 'https://note.com/omeroid/n/nf7d1e62fc1b2',
    picture: { image: travel2020Image, alt: '社員旅行2020' },
  },
  {
    date: '2019.02.01',
    category: 'メンバー',
    title: 'CEO松野がVulsのコミッターに登録',
    body: '弊社CEOの松野貞之が、OSS脆弱性検知ツール Vuls のメインコミッターの一員となりました。Vuls は Golang で書かれた脆弱性検知ツールで、国産OSSでは最大級のリポジトリです。',
    picture: { image: vulsImage, alt: 'Vuls' },
  },
]

/** お知らせ一覧ページの見出し */
export const newsHeading = {
  eyebrow: 'NEWS',
  title: 'お知らせ',
  lead: 'プレスリリース、ブログ、プロダクトの更新情報をお届けします。',
}
