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
          left: 'center'
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
              { value: 23, name: 'IT' },
              { value: 22, name: '製薬・ヘルスケア' },
              { value: 11, name: '研究開発' },
              { value: 22, name: '小売' },
              { value: 22, name: 'HR' }
            ]
          }
        ]
      }
    },
    {
      label: "テーマ別",
      options:
      {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          left: 'center'
        },
        center: ['50%', '60%'],
        series: [
          {
            name: 'テーマ別',
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
            data: [
              { value: 15, name: '経営・事業戦略' },
              { value: 20, name: '新興事業調査・開発' },
              { value: 40, name: '営業・マーケティング関連' },
              { value: 25, name: 'DX化・ITソリューション' },
            ]
          }
        ]
      }
    }
  ]
}