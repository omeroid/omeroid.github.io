/** 自社プロダクトページのコンテンツ */
import type { Product } from '~/types'

import dacImage from '~/assets/images/products/dac.png'
import shopifyImage from '~/assets/images/products/shopify.png'
import pokerImage from '~/assets/images/products/poker-review.jpg'

export const productHero = {
  eyebrow: 'PRODUCT',
  title: '自社プロダクト',
  lead: '社内R&D制度「RoiD」から生まれたものも、お客様との協業から育ったものも。omeroid が自分たちで手がけているプロダクトを紹介します。',
}

export const products: Product[] = [
  {
    label: 'PRODUCT / 提供中',
    title: '5noobs',
    body: 'ゲーマーがグループ・チーム・イベントを見つけるためのプラットフォーム。一緒に遊ぶ仲間との出会いを、もっと簡単にします。',
    href: 'https://www.five-noobs.com/ja',
    linkLabel: '詳細を見る',
    picture: { alt: '5noobs', placeholder: '5noobs のプロダクト画面' },
    reverse: true,
  },
  {
    label: 'PRODUCT / 提供中',
    title: 'dac',
    body: 'リモート化でのOJTを助ける進捗報告ツール。リモートで部下の状況がつかめていない、上司への報告がうまくいっていない、という現場におすすめです。',
    href: 'https://www.dac-work.com/',
    linkLabel: '詳細を見る',
    picture: { image: dacImage, alt: 'dac のプロダクト画面' },
  },
  {
    label: 'SERVICE / 提供中',
    title: '自社商品専用ECサイトの構築支援',
    body: 'Shopify を利用した自社商品専用ECサイトの構築を支援します。',
    href: 'https://omeroid-shopify.studio.site/',
    linkLabel: '詳細を見る',
    picture: { image: shopifyImage, alt: 'Shopify EC構築支援' },
  },
  {
    label: 'PRODUCT / 開発中',
    title: 'PokerReview',
    body: 'ポーカーのハンドをみんなで共有するアプリ。現在開発中です。',
    href: 'https://omeroid-poker-review.studio.site/',
    linkLabel: '詳細を見る',
    picture: { image: pokerImage, alt: 'PokerReview のプロダクト画面' },
    reverse: true,
  },
]
