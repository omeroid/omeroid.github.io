/** 会社概要ページのコンテンツ */
import type {
  CompanyRow,
  Guideline,
  Member,
  Picture,
  SectionHeading,
} from '~/types'

import officeImage from '~/assets/images/blog/office_transfer.jpeg'
import wakayamaImage from '~/assets/images/blog/wakayama-advancement.png'
import matsunoImage from '~/assets/images/member/matsuno.jpg'
import kiyotaImage from '~/assets/images/member/kiyota.jpg'
import wadaImage from '~/assets/images/member/wada.jpg'

export const companyHero = {
  eyebrow: 'OUR PHILOSOPHY',
  title: ['個性を重ねて、', '新しい価値を世の中に提供する。'],
  lead: 'omeroid は 2019年、松野・清田・和田の3名で創業。自己資本のみで経営し、コンサルタントとエンジニアが同じ屋根の下で働くプロフェッショナル集団です。',
}

// 和歌山オフィスの写真がまだ無いため、進出時のビジュアルを暫定で使用している。
// 撮影後は image を差し替える。
export const officePictures: Picture[] = [
  { image: officeImage, alt: '東京オフィス' },
  { image: wakayamaImage, alt: '和歌山オフィス／和歌山県への進出' },
]

/** 行動指針 omeload */
export const omeload = {
  heading: {
    eyebrow: 'OMELOAD',
    title: '行動指針 — omeload',
    lead: 'ルールでも採点表でもなく、一人ひとりの向上心がのびのび育つ環境を、みんなで作っていくための共通の目印です。',
  } satisfies SectionHeading,
  items: [
    {
      title: '自分の仕事に向き合うとき',
      body: '言われたことをそのままやるだけで終わらせない。目的を考え、自分なりの工夫をひとつ乗せる。',
    },
    {
      title: '難題にぶつかったとき',
      body: '「やったことがない」は「できない」ではない。未経験は、やってみてから判断する。',
    },
    {
      title: '議論し、決めるとき',
      body: 'ディスカッションは社歴・年齢に関係なく同じ目線で。対立するのは意見と意見であって、人と人ではない。',
    },
    {
      title: 'うまくいかなかったとき',
      body: '嘘はつかない、ごまかさない、隠さない。落ち度があるときは、指摘される前に自分から認める。',
    },
    {
      title: '頼るとき・頼られるとき',
      body: '学んだこと・ハマったこと・いい失敗は独り占めしない。自分の30分の共有が、誰かの3日を救う。',
    },
    {
      title: '仲間を迎えるとき',
      body: '「何をするか」だけでなく、「なぜそうしているのか」から伝える。文化は、伝えてはじめて受け継がれる。',
    },
  ] satisfies Guideline[],
}

/** 経営メンバー */
export const members: Member[] = [
  {
    role: 'CEO',
    name: '松野 貞之',
    body: '大手SIerの技術部門でOSSセキュリティツールの開発チームに所属。SaaSのバックエンド開発リーダーを経て創業。平日はほとんどコーディングをしている代表。得意言語は Golang。',
    picture: { image: matsunoImage, alt: '松野 貞之' },
  },
  {
    role: 'COO / IT DIVISION LEAD',
    name: '清田 侑',
    body: '大手運送会社へのITコンサルティング、R&D部署での新規サービス開発、IT教育事業などを担当。要件定義から設計・開発、フロント/バック/インフラまで一通り担うジェネラリスト。',
    picture: { image: kiyotaImage, alt: '清田 侑' },
  },
  {
    role: 'DIRECTOR / CONSULTING',
    name: '和田 直也',
    body: '東京大学経済学部卒業後、経営・ITコンサルティング企業を経て共同創業。中長期経営戦略、業務・組織設計、DX設計、新規事業立案・PoC構築支援まで幅広い実績。',
    picture: { image: wadaImage, alt: '和田 直也' },
  },
]

/** 会社概要テーブル */
export const companyRows: CompanyRow[] = [
  { label: 'COMPANY', value: ['omeroid株式会社（omeroid Inc.）'] },
  { label: 'FOUNDED', value: ['2019年（松野・清田・和田の3名で起業）'] },
  { label: 'CEO', value: ['代表取締役社長 松野 貞之'] },
  {
    label: 'OFFICES',
    value: [
      '東京事務所：東京都中央区八丁堀3-1-7 永井ビル2階',
      '和歌山事務所：和歌山県和歌山市湊紺屋町1-20 Kinowa 201号',
    ],
  },
  { label: 'CAPITAL', value: ['自己資本のみで経営'] },
  {
    label: 'BUSINESS',
    value: ['戦略・業務コンサルティング／ITコンサルティング・システム開発'],
  },
  {
    label: 'CERTIFICATION',
    value: ['ISO/IEC 27001:2022（情報セキュリティマネジメントシステム）'],
  },
]
