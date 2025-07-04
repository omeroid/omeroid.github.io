import React from 'react'
import { Link } from 'gatsby'
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
        <Banner title={title} content={content} image={productImage} />

        <div id="main">
            <ListItem items={services} />
        </div>
    </Layout>
)

export default Service

export function Head() {
    return (
        <>
            <title>Service</title>
            <meta name="description" content="Service Page" />
        </>
    )
}