/**
 * WORKS（開発事例）
 * 守秘義務のため業界・規模のみ掲載。写真は差し替え待ちのためプレースホルダー。
 * picture.image に import した画像を渡すと写真に置き換わる。
 */
import type { SectionHeading, Work } from '~/types'

export const worksHeading: SectionHeading = {
  eyebrow: 'WORKS',
  title: '開発事例',
  lead: '守秘義務のため業界・規模のみの掲載です。詳細は個別のご相談時に、お伝えできる範囲でご説明します。',
}

export const works: Work[] = [
  {
    category: 'FINANCE',
    title: '仮想通貨取引所の取引基盤開発',
    body: '高い可用性と監査要件を満たす取引基盤を、要件定義から設計・開発まで担当。',
    role: 'DESIGN / DEV / TECH LEAD',
    picture: {
      alt: '金融／取引画面',
      placeholder: '金融／取引画面のイメージ写真',
    },
  },
  {
    category: 'SECURITY',
    title: '脆弱性管理システムの設計・開発',
    body: 'OSSセキュリティ領域の知見を活かし、資産管理と検知フローを一体で設計。',
    role: 'DESIGN / DEV / TECH LEAD',
    picture: {
      alt: 'セキュリティ／サーバ',
      placeholder: 'セキュリティ／サーバのイメージ写真',
    },
  },
  {
    category: 'DISTRIBUTION',
    title: '青果企業の基幹システム刷新',
    body: '業務フローの整理から入り、戦略・設計・開発までを一気通貫で支援。',
    role: 'STRATEGY / DESIGN / DEV',
    picture: {
      alt: '流通・青果市場',
      placeholder: '流通・青果市場のイメージ写真',
    },
  },
  {
    category: 'MANUFACTURING',
    title: '飲料メーカーの業務システム開発',
    body: '現場業務に合わせたシステムを設計から開発まで担当。',
    role: 'DESIGN / DEV / TECH LEAD',
    picture: {
      alt: '製造・飲料工場',
      placeholder: '製造・飲料工場のイメージ写真',
    },
  },
  {
    category: 'SPORTS',
    title: 'スポーツ事業のファン向けサービス',
    body: '要件定義から設計・開発まで。シーズン性の高い運用も想定した構成に。',
    role: 'REQ / DESIGN / DEV / LEAD',
    picture: {
      alt: 'スポーツ／スタジアム',
      placeholder: 'スポーツ／スタジアムのイメージ写真',
    },
  },
  {
    category: 'STARTUP',
    title: 'ベンチャー企業のMVP開発',
    body: '検証すべき仮説から逆算し、最小構成でリリースまで到達させる設計・開発。',
    role: 'DESIGN / DEV / TECH LEAD',
    picture: {
      alt: 'スタートアップ／MVP開発',
      placeholder: 'スタートアップ／MVP開発のイメージ写真',
    },
  },
]

export const worksFootnote = '+ BLOCKCHAIN 事業の開発支援ほか、累計16社。'
