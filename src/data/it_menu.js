import React from 'react'
import iconItStorategyImage from '../assets/images/it/icon-it-storategy.png'
import iconDxImage from '../assets/images/it/icon-dx.png'
import iconGearImage from '../assets/images/it/icon-gear.png'
import iconOperationImage from '../assets/images/it/icon-operation.png'
import iconPerson3Image from '../assets/images/it/icon-person-3.png'

const itMenuData = () => [
  {
    image: iconItStorategyImage,
    title: 'IT戦略策定',
    accent: 'accent1',
    content: [
      '現状のIT利用状況や、目標・課題等を整理し、今後のIT戦略策定を支援',
      <br />,
      <br />,
      'ITを活用していきたいと漠然と思っていたり、今まではベンダー任せになっていたけど、それが適切かわからない、などのお悩みを解決',
    ],
  },
  {
    image: iconDxImage,
    title: '社内DX推進',
    accent: 'accent2',
    content: [
      'DXへの第一歩として社内で利用する業務ツールの整理と変更を支援',
      <br />,
      <br />,
      '現状のツールに使い勝手の悪さを感じているのに、改修には費用がかかる、どれに乗り換えたら良いのかわからない、などのお悩みを解決',
    ],
  },
  {
    image: iconGearImage,
    title: 'システム開発',
    accent: 'accent3',
    content: [
      '要件定義・設計・開発・テスト等のシステム開発全般を支援',
      <br />,
      <br />,
      'フルスクラッチのシステム開発をまとめて依頼したい、などのお悩みを解決',
    ],
  },
  {
    image: iconOperationImage,
    title: '内製化支援',
    accent: 'accent4',
    content: [
      'システム開発をリーディングするとともに社内メンバーの育成を支援',
      <br />,
      <br />,
      '社内にリードエンジニアが不足しているけど、将来的には内製化も視野に入れてメンバーを育成したいというお悩みを解決',
    ],
  },
  {
    image: iconPerson3Image,
    title: '運用・テスト',
    accent: 'accent5',
    content: [
      'システムの運用保守支援',
      <br />,
      <br />,
      '開発後の運用保守含めて依頼したい、既存システムの運用保守会社を変更したい、などのお悩みを解決',
    ],
  },
]

export default itMenuData
