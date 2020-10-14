import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ListItem from '../components/ListItem'

import newsImage from '../assets/images/news.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

import newsData from '../data/news'

const title = "News"
const content = "会社やメンバーに関わる最新ニュースをお届けします"
const news = newsData()

const News = (props) => (
    <Layout>
        <Helmet>
            <title>News</title>
            <meta name="description" content="News Page" />
        </Helmet>

        <Banner title={title} content={content} image={newsImage} />

        <div id="main">
            <ListItem items={news} />
        </div>
    </Layout>
)

export default News