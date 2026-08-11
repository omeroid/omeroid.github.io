/** トップページのコンテンツ */
import type { AccentCard, LinkItem, Picture, Stat } from '~/types'
import { externalLinks } from './site'

import engineerImage from '~/assets/images/service/engineer.jpg'
import consultantImage from '~/assets/images/consulting/teamwork-in-a-office.jpeg'
import officeImage from '~/assets/images/blog/office_transfer.jpeg'
import gasshukuImage from '~/assets/images/news/gasshuku2024.webp'
import travel2023Image from '~/assets/images/blog/travel2023.webp'
import partyImage from '~/assets/images/blog/party2021.jpg'
import ryokoImage from '~/assets/images/news/ryoko2024.jpg'
import travel2020Image from '~/assets/images/blog/travel2020.jpg'

/** ファーストビュー */
export const hero = {
  title: ['個性を重ねて、', '新しい価値を世の中に。'],
  subtitle: 'Layering individuality into new value.',
  buttons: [
    { label: '無料で相談する', href: '/contact/', variant: 'solid' },
    { label: 'コンサルティングの支援内容', href: '/consulting/' },
    { label: 'システム開発の支援内容', href: '/it/' },
  ] satisfies { label: string; href: string; variant?: 'solid' | 'outline' }[],
}

/** ヒーロー直下を流れるキーワード */
export const tickerWords: string[] = [
  'STRATEGY',
  'MANAGEMENT STRATEGY',
  'BUSINESS & ORG DESIGN',
  'NEW BUSINESS',
  'DX DESIGN',
  'IT CONSULTING',
  'FULL SCRATCH',
  'GO',
  'REACT',
  'AWS',
  'RUST',
  'BLOCKCHAIN',
  'IOT',
  'OSS FIRST',
]

/** OUR WHY */
export const why = {
  eyebrow: 'OUR WHY',
  title: ['ちがう強みが重なると、', 'ひとりでは届かない答えが出る。'],
  paragraphs: [
    'コンサルタントとエンジニア。事業をつくる人と、それを動かす仕組みをつくる人。omeroid はその両方が同じチームにいます。だから「何をつくるべきか」から一緒に決められるし、つくらずに済む道があればそう言えます。AIが騒がれる今だからこそ、きちんとしたIT知識を持って活用していくことが必要です。',
    '重なりから生まれる新しい価値を、お客様の事業に届けること。それが私たちの仕事です。',
  ],
  link: { label: '私たちの考え方をみる', href: '/company/' } satisfies LinkItem,
  /** 中央のロゴを囲むラベル */
  orbitLabels: {
    left: 'CONSULTING',
    right: 'ENGINEERING',
    bottom: 'YOUR BUSINESS',
  },
}

/** SERVICES */
export const services = {
  eyebrow: 'SERVICES',
  title: ['ビジネスとITの、両輪で。', 'AIを全てのビジネスの基軸に。'],
  items: [
    {
      no: '01',
      title: '戦略・業務コンサルティング',
      body: '戦略策定フェーズから、データ駆動経営を実現するための効果的・効率的なデジタル化を伴走支援します。',
      tags: ['事業戦略', '営業・マーケ戦略', 'データ戦略', '新規事業立案'],
      href: '/consulting/',
      picture: {
        image: consultantImage,
        alt: 'ディスカッションの様子',
      } satisfies Picture,
    },
    {
      no: '02',
      title: 'ITコンサルティング・システム開発',
      body: '経営方針に合わせ、今必要なものをよりシンプルに実現し、未来を見据えてシステムを設計・開発します。',
      tags: [
        'IT戦略策定',
        '社内DX推進',
        'フルスクラッチ開発',
        '内製化支援',
        '運用・保守',
      ],
      href: '/it/',
      picture: {
        image: engineerImage,
        alt: '開発チームの様子',
      } satisfies Picture,
    },
  ],
}

/** 数値実績 */
export const stats: Stat[] = [
  { value: '16', unit: '社', label: 'DEV PROJECTS' },
  { value: '7', unit: '業界+', label: 'INDUSTRIES' },
  { value: '100', unit: '%', label: 'SELF-FUNDED' },
  { value: '2', unit: '拠点', label: 'TOKYO / WAKAYAMA' },
]

/** PHILOSOPHY */
export const philosophy = {
  eyebrow: 'PHILOSOPHY',
  title: '私たちの哲学',
  lead: '「個性を重ねて、新しい価値を世の中に提供する」ために、一人ひとりが大切にしていること。',
  cards: [
    {
      accent: 'orange',
      accentPair: 'amber',
      title: '自分の考えを持つこと',
      body: '「普通」「当たり前」とされていることを鵜呑みにせず、一度自分の頭で問い直したうえで、自分なりの考えと判断を持つ。',
      dots: true,
    },
    {
      accent: 'teal',
      accentPair: 'green',
      title: 'プロフェッショナルであること',
      body: 'スキルと責任を持って、他にはない価値を提供する。磨き続けたスキルは、結果として相手への価値につながっていく。',
      dots: true,
    },
    {
      accent: 'blue',
      accentPair: 'purple',
      title: '楽しむこと',
      body: '全員が楽しく誇りを持って仕事を行い、困難な局面でも悲観に飲まれず、できることに目を向けて前向きに取り組む。',
      dots: true,
    },
  ] satisfies AccentCard[],
}

/** 哲学セクション下の写真3枚 */
export const culturePictures: Picture[] = [
  { image: officeImage, alt: 'オフィスの風景' },
  { image: gasshukuImage, alt: '社員合宿＠静岡三島' },
  { image: travel2023Image, alt: '社員旅行＠韓国' },
]

/** PRODUCT（トップページのティザー） */
export const productTeaser = {
  eyebrow: 'PRODUCT',
  title: 'つくりたいものを、自分たちでもつくる。',
  lead: '社内R&D制度「RoiD」では、年2回のピッチで採択されたプロジェクトが、半年でMVPをつくり事業化を目指します。受託だけでなく、自分たちの手で価値を生み出す場です。',
  cards: [
    {
      accent: 'orange',
      eyebrow: 'IN-HOUSE R&D',
      title: 'RoiD',
      body: '年2回の社内ピッチで採択されたプロジェクトに、予算と半年間の時間を割り当てる社内R&D制度。ここから生まれたプロダクトを、事業として育てています。',
    },
    {
      accent: 'blue',
      eyebrow: 'PRODUCT',
      title: '5noobs',
      body: 'ゲーマーがグループ・チーム・イベントを見つけるためのプラットフォーム。',
      href: 'https://www.five-noobs.com/ja',
      linkLabel: '詳細を見る',
    },
  ] satisfies AccentCard[],
  cta: {
    label: 'プロダクトをもっと見る',
    href: '/product/',
  } satisfies LinkItem,
}

/** BLOG */
export const blogs = {
  eyebrow: 'BLOG',
  title: 'omeroidを知ってもらう',
  lead: '会社のことも、技術のことも。日々の実践から得たものを社内外に発信しています。',
  cards: [
    {
      accent: 'orange',
      eyebrow: 'MEDIA',
      title: 'Company Blog',
      body: '働き方、制度、メンバーのこと。会社としての考え方や日々の出来事を綴っています。',
      href: externalLinks.companyBlog,
      linkLabel: '記事を読む',
    },
    {
      accent: 'blue',
      eyebrow: 'MEDIA',
      title: 'Tech Blog',
      body: '技術情報を社内外に発信するブログ。DIFF会などの勉強会の内容も公開しています。',
      href: externalLinks.techBlog,
      linkLabel: '記事を読む',
    },
  ] satisfies AccentCard[],
}

/** RECRUIT */
export const recruit = {
  eyebrow: 'RECRUIT',
  title: ['あなたの個性が、', '次の価値になる。'],
  lead: '祝日も休みにして有給25日以上、旅行手当、2台目PCの自由選択、社内R&D制度。「自分の考えを持つこと」を大事にする人が働きやすい環境を、制度からつくっています。',
  tags: [
    '有給25日以上',
    '旅行手当',
    '書籍・資格補助',
    '社内R&D制度',
    '東京／和歌山',
  ],
  cta: {
    label: '採用情報を見る',
    href: externalLinks.recruit,
  } satisfies LinkItem,
  pictures: [
    { image: partyImage, alt: '創立記念パーティーの様子' },
    { image: ryokoImage, alt: '社員旅行＠北海道' },
    { image: travel2020Image, alt: '社員旅行2020' },
  ] satisfies Picture[],
}
