import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ListItem from '../components/ListItem'

import logoImage from '../assets/images/logo/omeroid_icon.svg'

import blogData from '../data/blog'

const title = "Blog"
const content = "omeroidの様子をお届けします"
const blogs = blogData()

const News = (props) => (
    <Layout>
        <Helmet>
            <title>News</title>
            <meta name="description" content="Blog Page" />
        </Helmet>

        <Banner title={title} content={content} image={logoImage} />

        <div id="main">
            <ListItem items={blogs} />
        </div>
    </Layout>
)

export default News