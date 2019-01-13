//core
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
//front10 components
import '@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css'

import '../app.css'

import React from 'react'

import {
  Row,
  Header,
  Container,
  Hero,
  Image,
  Column,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  Features,
  Team,
  Footer,
  Copyright,
  Social,
  Analytics,
  ContactInfo,
  Card,
  Section,
} from '@front10/landing-page-book/dist/components'

import MessengerCustomerChat from 'react-messenger-customer-chat'
// import Helmet from "react-helmet";

import SEO from '../components/seo/seo'

import particles from '../data/particles.json'
import features from '../data/features.json'
import team from '../data/team.json'

export default () => (
  <div className="App">
    <MessengerCustomerChat pageId="1970520546574914" appId="1634817276825716" />
    <SEO />
    <Analytics idTracking="UA-132404098-1" urlPath="/" />
    <Navbar expand="lg">
      <Container>
        <NavbarCollapse>
          <NavbarBrand>
            <Image
              width="180"
              src="images/logo/omeroid_w.svg"
              alt="omeroid logo"
            />
          </NavbarBrand>
          <NavbarNav alignItems="right">
            <NavbarLink>Blog (Comming soon..)</NavbarLink>
          </NavbarNav>
        </NavbarCollapse>
      </Container>
    </Navbar>
    <Hero
      opacity={1}
      overlayColor="#373D45"
      particlesParams={particles}
      minHeight="80vh"
    >
      <Container>
        <Image
          alt="omeroid logo"
          className="main-logo"
          src="images/logo/omeroid_w.svg"
          width="800vw"
        />
        <Header className="text-warning">~ Make it simple ~</Header>
        <Social type="twitter" url="https://twitter.com/omeroid_inc" />
        <Social type="facebook" url="fb.me/omeroid" />
      </Container>
    </Hero>
    <Container>
      <br />
      <Header borderBottom type="h1">
        Service
      </Header>
      <Features shadow buttonColor="primary" features={features} />
    </Container>
    <Container>
      <Header borderBottom type="h1">
        Portfolio
      </Header>
      <Section>
        <Container className="text-justify">
          <Row>
            <Column className="col-12 col-md-6">
              <Card
                contentAlign="left"
                image="images/logo/omeroid.svg"
                imageCircle={false}
                title="Comming..."
                subTitle=""
                summary={``}
              />
            </Column>
          </Row>
        </Container>
      </Section>
    </Container>
    <Container>
      <Header borderBottom type="h1">
        Team
      </Header>
      <Team
        showBorder={false}
        members={team}
        socials={['linkedin', 'twitter']}
      />
    </Container>
    <Container>
      <Header borderBottom type="h1">
        Contact Info
      </Header>
      <ContactInfo
        showBorder
        showIcons
        lat={35.579114}
        lng={139.747703}
        locationApiKey="AIzaSyABYHuI6Wr_dYJA98KeMiltbx_aF5EqaDc"
        address="東京都大田区平和島6丁目1番1号"
        email="sadayuki.matsuno@omeroid.com"
        website="https://www.omeroid.com"
      />
    </Container>
    <Footer copyrightTextColor={'light'}>
      <Row>
        <Column className="col-sm-12 col-md">
          <Copyright
            showAllRightText={false}
            text="omeroid Inc. All rights reserved"
          />
        </Column>
      </Row>
    </Footer>
  </div>
)
