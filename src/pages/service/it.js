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
      <div style={{ display: 'none' }}>
        <p>
          <span>支援内容</span>
          <span>IT戦略作成</span>
          <span>現状のIT利用状況や、目標・課題等を整理し、今後のIT戦略策定を支援ITを活用していきたいと漠然と思っていたり、今まではベンダー任せになっていたけど、それが適切かわからない、などのお悩みを解決</span>
          <span>社内DX推進</span>
          <span>DXへの第一歩として社内で利用する業務ツールの整理と変更を支援現状のツールに使い勝手の悪さを感じているのに、改修には費用がかかる、どれに乗り換えたら良いのかわからない、などのお悩みを解決</span>
          <span>システム開発</span>
          <span>要件定義・設計開発・テスト等のシステム開発全般を支援フルスクラッチのシステム開発をまとめて依頼したい、などのお悩みを解決</span>
          <span>内製化支援</span>
          <span>システム開発をリーディングするとともに社内メンバーの育成を支援社内にリードエンジニアが不足しているけど、将来的には内製化も視野に入れてメンバーを育成したいというお悩みを解決</span>
          <span>運用・保守</span>
          <span>システムの運用保守支援開発後の運用保守含めて依頼したい、既存システムの運用保守会社を変更したい、などのお悩みを解決</span>
        </p>
        <p>
          <span>omeroidの強み</span>
          <span>ビジネス課題に合わせた解決方法</span>
          <span>画一的ではなく、企業ごとの課題に合わせて、柔軟に最適なソリューションを提供いたします。私たちのゴールは、システムの提供ではなくビジネスのアップデートです。</span>
          <span>一気通貫のフルスクラッチ開発</span>
          <span>グランドデザインから保守運用まで全ての工程をサポートすることが可能です。システムは基本的にフルスクラッチでの開発なので、より多くの要望やこだわりを実現できる体制になっています。</span>
          <span>未来を見据えた技術選定と構成</span>
          <span>「システムは長期的に育てていくもの」という認識のもと、開発後の拡張や、仕様変更、保守運用に苦労しない技術選定と構成を採用しています。ロックインにならないよう、オープンな技術のみを採用します。</span>
          <span>多種多様なシステム開発の実績</span>
          <span>ブラウザアプリ、モバイルアプリ、ブロックチェーン等、業種・種類問わず多種多様なWebシステムの開発経験があります。</span>
        </p>
        <p>
          <span>事例</span>
          <span>セキュリティ事業</span>
          <span>スポーツ事業支線</span>
          <span>部品・飲料メーカー支援</span>
          <span>青果卸事業支援</span>
          <span>ベンチャー企業MVP開発</span>
          <span>ブロックチェーン事業</span>
        </p>
        <p>
          <span>技術スタック</span>
          <span>golang</span>
          <span>React</span>
          <span>GRPC</span>
          <span>docker</span>
          <span>AWS</span>
          <span>Vue.js</span>
          <span>React</span>
          <span>Kotlin</span>
          <span>JsonRPC</span>
          <span>Postgres</span>
          <span>Amplify</span>
        </p>
      </div>
    </div >
  </Layout >
)

export default Service