const consultingAchievementData = () => {
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
              { value: 26, name: '製薬・ヘルスケア' },
              { value: 26, name: '物流・卸売・小売' },
              { value: 15, name: 'HR' },
              { value: 26, name: 'ITサービス' },
              { value: 6, name: 'その他' }
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
              { value: 13, name: '経営・事業戦略' },
              { value: 29, name: '新規事業開発・市場調査' },
              { value: 21, name: 'IT/DX戦略・デジタル化' },
              { value: 32, name: 'MA/営業改革' },
              { value: 5, name: 'その他' },
            ]
          }
        ]
      }
    }
  ]
}

export default consultingAchievementData
