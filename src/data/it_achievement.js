import React from 'react'
import iconStrength1 from '../assets/images/it/icon-strength-1.png'
import iconStrength2 from '../assets/images/it/icon-strength-2.png'
import iconStrength3 from '../assets/images/it/icon-strength-3.png'
import iconStrength4 from '../assets/images/it/icon-strength-4.png'

export default () => {
  return [
    {
      label: "業界別",
      options: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          left: 'center',
        },
        pie: {
          center: ['50%', '30%']
        },
        series: [
          {
            name: '業界別',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false
            },
            tooltip: {
              show: true,
              formatter: "{a} <br/>{b} : {d}%"
            },
            center: ['50%', '60%'],
            data: [
              { value: 20, name: 'セキュリティ事業' },
              { value: 20, name: 'スポーツ事業支援' },
              { value: 15, name: '部品・飲料メーカー支援' },
              { value: 15, name: '青果卸売事業支援' },
              { value: 15, name: 'ベンチャー企業MVP開発' },
              { value: 9, name: 'ブロックチェーン事業' },
              { value: 6, name: 'その他' },
            ],
          }
        ]
      }
    },
  ]
}