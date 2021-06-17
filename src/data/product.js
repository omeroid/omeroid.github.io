import React from 'react'
import labelImage from '../assets/images/products/label-main.png'
import dacImage from '../assets/images/products/dac.png'
import pokerReviewImage from '../assets/images/products/poker-review.jpg'
import shopifyImage from '../assets/images/products/shopify.png'

export default () => [
  {
    "image": dacImage,
    "imageAlt": "リモート化でのOJTを助ける進捗報告ツールdac",
    "to": "https://www.dac-work.com/",
    "title": "リモート化でのOJTを助ける進捗報告ツールdac",
    "content": ["リモート化でのOJTを助ける進捗報告サービスを提供", <br />,
      "リモートで部下の状況がつかめてない、上司に報告がうまくいっていないという状況におすすめです。", <br />,
    ]
  },
  {
    "image": labelImage,
    "imageAlt": "ラベルプリントシステム",
    "to": "https://www.gen-ome.io/label/",
    "title": "ラベルプリントシステム",
    "content": ["市販のAndroid端末とラベルプリンタを使用してラベルプリントを行えるサービスを提供", <br />,
      "データはエクセルで記述して登録できるので、お手軽に、複雑な知識も必要ありません。", <br />,
      "ラベルのテンプレートも作成できるため、ご自身で好きなようにラベルを作成できます。"
    ]
  },
  {
    "image": shopifyImage,
    "imageAlt": "Shopify",
    "to": "https://omeroid-shopify.studio.site/",
      "title": "自社商品専用ECサイトの構築支援",
      "content": ["Shopifyを利用した自社商品専用ECサイトの構築を支援"]
  },
  {
    "image": pokerReviewImage,
    "imageAlt": "PokerReview",
    "to": "https://omeroid-poker-review.studio.site/",
    "title": "PokerReview(開発中)",
      "content": ["ポーカーのハンドをみんなで共有しよう",<br/>,
          "ポーカーハンド共有アプリ"
      ]
  },
]
