import React from 'react'

import travel2020Image from '../assets/images/blog/travel2020.jpg'
import logoImage from '../assets/images/logo/omeroid_icon.svg'
import newBisinessImage from '../assets/images/blog/new-bisiness.png'

export default () => [
  {
    "image": newBisinessImage,
    "imageAlt": "新規事業への取り組みを始めました",
    "to": "https://note.com/omeroid/n/n0e0cb1249d0e",
    "title": [<small>2020/11</small>, <br />, "[ブログ]新規事業への取り組み"],
    "content": ["メンバーからアイデアを募り、仮説検証スプリントを回して、新規事業を創造するプログラムをはじました", <br />]
  },
  {
    "image": travel2020Image,
    "imageAlt": "社員旅行2020",
    "to": "https://note.com/omeroid/n/nf7d1e62fc1b2",
    "title": [<small>2020/10</small>, <br />, "社員旅行2020"],
    "content": ["メンバー8名で社員旅行に行ったきた様子をお届けします", <br />,
    ]
  },
  {
    "image": logoImage,
    "imageAlt": "What is omeroid?",
    "to": "https://note.com/omeroid/n/n874cf4ff76c6",
    "title": ["What is omeroid?"],
    "content": ["omeroidの社名の由来をご紹介します", <br />,
    ]
  },
]