import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'

import memberImage from '../../assets/images/member/matsuno.jpg'

const title = "松野貞之"
const content = "代表取締役 CEO"

const Service = (props) => (
    <Layout>
        <Helmet>
            <title>松野貞之</title>
            <meta name="description" content="Member Matsuno Page" />
        </Helmet>

        <Banner title={title} content={content} image={memberImage} />

    </Layout>
)

export default Service