import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'
import Image from '../../components/Item'

import engineerImage from '../../assets/images/service/engineer.jpg'
import amplifyImage from '../../assets/images/service/skill/amplify.jpeg'
import angularImage from '../../assets/images/service/skill/angular.png'
import awsImage from '../../assets/images/service/skill/aws.png'
import dynamodbImage from '../../assets/images/service/skill/dynamodb.png'
import flutterImage from '../../assets/images/service/skill/flutter.png'
import gcpImage from '../../assets/images/service/skill/gcp.png'
import golangImage from '../../assets/images/service/skill/golang.png'
import kotlinImage from '../../assets/images/service/skill/kotlin.png'
import mysqlImage from '../../assets/images/service/skill/mysql.png'
import postgresImage from '../../assets/images/service/skill/postgres.png'
import reactImage from '../../assets/images/service/skill/react.png'
import rubyRailsImage from '../../assets/images/service/skill/ruby_rails.jpg'
import swiftImage from '../../assets/images/service/skill/swift.png'
import vuejsImage from '../../assets/images/service/skill/vuejs.png'
import sampleImage from '../../assets/images/it/example.png'
import menuImage from '../../assets/images/it/menu.png'
import stackImage from '../../assets/images/it/stack.jpg'
import strengthImage from '../../assets/images/it/strength.png'

import itConsultingData from '../../data/it_consulting'
import memberData from '../../data/it_member'

const title = "IT Consulting"
const content = "ITコンサルティング・システム開発事業について"
const itConsulting = itConsultingData()
const members = memberData()

const Service = (props) => (
  <Layout>
    <Helmet>
      <title>IT Consulting</title>
      <meta name="description" content="IT Consulting Page" />
    </Helmet>

    <Banner title={title} content={content} image={engineerImage} />

    <div id="main">
      {/* <section id="two" className={'spotlights' + ' ' + 'left'}>
            { itConsulting.map(i => {
                return <Item image={i.image} imageAlt={i.imageAlt} to={i.to} title={i.title} content={i.content} >{props.children}</Item>
            }) }
          </section> */}
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>支援内容</h2>
          </header>
          <Image image={menuImage} imgAlt="支援内容" />
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>omeroidの強み</h2>
          </header>
          <Image image={strengthImage} imgAlt="omeroidの強み" />
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>事例</h2>
          </header>
          <Image image={sampleImage} imgAlt="事例" />
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>技術スタック例</h2>
          </header>
          <Image image={stackImage} imgAlt="技術スタック例" />
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