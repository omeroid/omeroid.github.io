import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import ListItem from '../../components/ListItem'

import productImage from '../../assets/images/service.jpg'

import productData from '../../data/product'

const title = "Product"
const content = "omeroidの自社プロダクトを紹介します"
const services = productData()

const Service = (props) => (
    <Layout>
        <Helmet>
            <title>Service</title>
            <meta name="description" content="Service Page" />
        </Helmet>

        <Banner title={title} content={content} image={productImage} />

        <div id="main">
            <ListItem items={services} />
        </div>
    </Layout>
)

export default Service