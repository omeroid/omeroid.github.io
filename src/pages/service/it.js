import React from 'react'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'
import Content1 from '../../components/Content1'
import Content2 from '../../components/Content2'
import Content3 from '../../components/Content3'
import Chart from '../../components/Chart'

import engineerImage from '../../assets/images/service/engineer.jpg'
import techBlogImage from '../../assets/images/news/omeroid-techblog.png'

import menuData from '../../data/it_menu'
import strengthData from '../../data/it_strength'
import stackData from '../../data/it_stack'
import achievementData from '../../data/it_achievement'

const title = 'IT Consulting'
const content = 'ITコンサルティング・システム開発事業について'
const menues = menuData()
const strengths = strengthData()
const stacks = stackData()
const achievements = achievementData()

const techBlog = [
  {
    image: techBlogImage,
    imageAlt: 'TECH BLOG',
    to: 'https://zenn.dev/p/omeroid',
    title: ['TECH BLOG'],
    content: ['omeroidの技術的な取り組みをZennで発信しています'],
  },
]

const Service = (_props) => (
  <Layout>
    <Banner title={title} content={content} image={engineerImage} />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>支援内容</h2>
          </header>
          <div className="flex-wrapper">
            {menues.map((m) => (
              <Content1
                image={m.image}
                title={m.title}
                accent={m.accent}
                content={m.content}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>omeroidの強み</h2>
          </header>
          <div className="flex-wrapper">
            {strengths.map((m) => (
              <Content2
                image={m.image}
                title={m.title}
                accent={m.accent}
                content={m.content}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>事例</h2>
          </header>
          <div className="flex-wrapper">
            {achievements.map((i) => {
              return <Chart label={i.label} options={i.options} width="700px" />
            })}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>技術スタック例</h2>
          </header>
          <div className="flex-wrapper">
            {stacks.map((s) => (
              <Content3 image={s.image} title={s.title} width="300px" />
            ))}
          </div>
        </div>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>コンテンツ</h2>
          </header>
          <ListItem items={techBlog} />
        </div>
      </section>
    </div>
  </Layout>
)

export default Service

export function Head() {
  return (
    <>
      <title>IT Consulting</title>
      <meta name="description" content="IT Consulting Page" />
    </>
  )
}
