import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'
import Item from '../../components/Item'
import Content1 from '../../components/Content1'
import Content2 from '../../components/Content2'
import ConsultingExample from '../../components/ConsultingExample'
import Chart from '../../components/Chart'

import consultantImage from '../../assets/images/service/consultant.jpg'
import menuImage from '../../assets/images/consulting/menu.png'
import achievementImage from '../../assets/images/consulting/achievement.png'
import strengthImage from '../../assets/images/consulting/strength.png'
import exampleImage from '../../assets/images/consulting/example.png'

import memberData from '../../data/consulting_member'
import menuData from '../../data/consulting_menu'
import strengthData from '../../data/consulting_strength'
import exampleData from '../../data/consulting_example'
import achievementData from '../../data/consulting_achievement'

const title = "Consulting"
const content = "業務コンサルティングサービスについて"
const members = memberData()
const menus = menuData()
const strengths = strengthData()
const examples = exampleData()
const achievements = achievementData()

const Service = (props) => (
  <Layout>
    <Helmet>
      <title>IT Consulting</title>
      <meta name="description" content="IT Consulting Page" />
    </Helmet>
    <Banner title={title} content={content} image={consultantImage} />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>業務内容</h2>
          </header>
          <p>
            新規・既存事業を問わず、幅広い業界のビジネス戦略、営業・マーケティング戦略、データ戦略の３つのテーマで伴走・サポートいたします。<br />
            また、デジタル化・DX推進のテーマでは戦略に関してだけではなく、システム開発の支援も行っています。
          </p>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>支援内容</h2>
          </header>
          <div className="flex-wrapper">
            {menus.map(m => (<Content1 image={m.image} title={m.title} accent={m.accent} content={m.content} width="350px" height="550px" />))}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>強み</h2>
          </header>
          <div className="flex-wrapper">
            {strengths.map(m => (<Content2 image={m.image} title={m.title} accent={m.accent} content={m.content} />))}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>実績</h2>
          </header>
          <div className="flex-wrapper">
            {achievements.map(i => {
              return (<Chart
                label={i.label}
                options={i.options}
                width="500px"
              />)
            })}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>事例</h2>
          </header>
          <div className="flex-wrapper">
            {examples.map(m => (<ConsultingExample key={title} title={m.title} industry={m.industry} scale={m.sclae} overview={m.overview} background={m.background} content={m.content} />))}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>メンバー</h2>
          </header>
          <div>
            <ListItem items={members} />
          </div>
        </div>
      </section>
    </div >
  </Layout >
)

export default Service