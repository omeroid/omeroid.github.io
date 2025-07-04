import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ListItem from '../components/ListItem'

import newsImage from '../assets/images/news.jpg'

import newsData from '../data/news'

const title = "News"
const content = "会社やメンバーに関わる最新ニュースをお届けします"
const news = newsData()

const News = (props) => (
    <Layout>
        <Banner title={title} content={content} image={newsImage} />

        <div id="main">
            <ListItem items={news} />
        </div>
    </Layout>
)

export default News

export function Head() {
    return (
        <>
            <title>News</title>
            <meta name="description" content="News Page" />
        </>
    )
}