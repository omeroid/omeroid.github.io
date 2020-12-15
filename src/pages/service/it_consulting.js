import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'
import Item from '../../components/Item'

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

import itConsultingData from '../../data/it_consulting'

const title = "IT Consulting"
const content = "ITコンサルティング事業について"
const itConsulting = itConsultingData()

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
                    <h2>業務内容</h2>
                </header>
                <p>要件定義・設計・開発・テスト・運用等のシステム開発の全フェーズをサポートいたします</p>
                <div className="box">
                  <h4>中小企業様向けのIT施策検討、システム開発</h4>
                  <p>
                    主に中小企業様に向けたIT施策検討、システム開発を行っています。<br />
                    ITでお困りのことがあればご気軽にご相談ください。<br />
                    現状の簡単な相談からでもお受けします。<br />
                    <br />
                    特に中小企業のお客様は、会社により状態が様々ですので、<br />
                    既存システムを生かしつつ、必要なところだけ改善する等の、
                    個々の会社に向けた現状に即した提案を行います
                  </p>
                </div>
                <div className="box">
                  <h4>業務委託での開発案件サポート</h4>
                  <p>
                    経験豊富なエンジニアが在籍しております。<br />
                    様々な技術スタックに対応できますので、お問い合わせください。<br />
                  </p>
                </div>
            </div>
          </section>
          <section id="one">
            <div className="inner">
              <header className="major">
                  <h2>実績</h2>
              </header>
              <h4>直請け案件</h4>
              <div className="box">
                <h5>生鮮食品卸売業者様に向けたIT施策検討</h5>
                <ul>
                  <li>次期IT戦略に向けた現状調査、およびプラン作成</li>
                  <li>基幹系システム刷新（ピッキングにおけるラベル管理業務、配送業務等）</li>
                  <li>ECサイト構築</li>
                </ul>
              </div>
              <h4>他社からの業務依託案件</h4>
              <div className="box">
                <h5>脆弱性検知OSS開発会社での開発サポート（Golang）</h5>
              </div>
              <div className="box">
                <h5>スポーツ関連企業のECサイトへの要件定義・設計・開発サポート（Rails）</h5>
              </div>
              <div className="box">
                <h5>ブロックチェーンを利用したサービス運営会社への開発サポート（Golang）</h5>
              </div>
            </div>
          </section>
          <section id="one">
            <div className="inner">
              <header className="major">
                  <h2>得意技術領域</h2>
              </header>
              <div className="grid-wrapper">
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={golangImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={rubyRailsImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={vuejsImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={reactImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={kotlinImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={flutterImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={mysqlImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={dynamodbImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={awsImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={gcpImage} /></div>
                <div className="col-2" style={{padding: '5px', margin: 'auto'}}><img style={{height: 'auto', width: 'auto', maxWidth: '100%'}} src={amplifyImage} /></div>
            </div>
            </div>
          </section>
        </div>
    </Layout>
)

export default Service