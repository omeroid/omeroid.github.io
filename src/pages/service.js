import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ListItem from '../components/ListItem'

import serviceImage from '../assets/images/service.jpg'

import serviceData from '../data/service'

const title = "Service"
const content = "omeroidの事業内容を紹介します"
const services = serviceData()

const Service = (props) => (
    <Layout>
        <Helmet>
            <title>Service</title>
            <meta name="description" content="Service Page" />
        </Helmet>

        <Banner title={title} content={content} image={serviceImage} />

        <div id="main">
            <ListItem items={services} />
        </div>
    </Layout>
)

export default Service