import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'
import Item from '../../components/Item'

import consultantImage from '../../assets/images/service/consultant.jpg'
import menuImage from '../../assets/images/consulting/menu.png'
import achievementImage from '../../assets/images/consulting/achievement.png'
import strengthImage from '../../assets/images/consulting/strength.png'
import exampleImage from '../../assets/images/consulting/example.png'

import memberData from '../../data/consulting_member'

const title = "Consulting"
const content = "業務コンサルティングサービスについて"
const members = memberData()

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
          <div className="box">
            <Item image={menuImage} />
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>強み</h2>
          </header>
          <div className="box">
            <Item image={strengthImage} />
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>実績</h2>
          </header>
          <div className="box">
            <Item image={achievementImage} />
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>事例</h2>
          </header>
          <div className="box">
            <Item image={exampleImage} />
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