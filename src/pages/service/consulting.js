import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'
import Item from '../../components/Item'

import consultantImage from '../../assets/images/service/consultant.jpg'
import consultantSampleImage from '../../assets/images/consulting/consulting_sample.png'

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
            事業戦略・経営戦略策定に伴走・サポートいたします。<br />
            また、豊富なデジタル化・DX推進の経験をもとに、戦略策定からロードマップ策定、システム・データアーキテクチャの設計等をご支援いたします。
          </p>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>事例紹介</h2>
          </header>
          <div className="box">
            <Item image={consultantSampleImage} />
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