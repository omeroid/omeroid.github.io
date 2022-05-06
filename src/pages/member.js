import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ListItem from '../components/ListItem'

import memberImage from '../assets/images/member.png'

import memberData from '../data/member'

const title = "Member"
const content = "omeroidのメンバーを紹介します"
const members = memberData()

const Service = (props) => (
    <Layout>
        <Helmet>
            <title>Member</title>
            <meta name="description" content="Member Page" />
        </Helmet>

        <Banner title={title} content={content} image={memberImage} />

        <div id="main">
            <ListItem items={members} />
        </div>
    </Layout>
)

export default Service