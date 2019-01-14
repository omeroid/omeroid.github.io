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
  ImageList,
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
  Label,
} from '@front10/landing-page-book/dist/components'

import MessengerCustomerChat from 'react-messenger-customer-chat'
// import Helmet from "react-helmet";

import SEO from '../components/seo/seo'

import particles from '../data/particles.json'
import features from '../data/features.json'
import team from '../data/team.json'
import skill from '../data/skill.json'
import shopping from '../data/shopping.json'
import contactInfo from '../data/contactInfo.json'

export default () => (
  <div className="App">
    <MessengerCustomerChat pageId="1970520546574914" appId="1634817276825716" />
    <SEO />
    <Analytics idTracking="UA-132404098-1" urlPath="/" />
    <Navbar fixed expand="lg">
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
            <NavbarLink href={'#service'}>Service</NavbarLink>
            <NavbarLink href={'#portfolio'}>Portfolio</NavbarLink>
            <NavbarLink href={'#team'}>Team</NavbarLink>
            <NavbarLink href={'#contactInfo'}>Contact Info</NavbarLink>
            <NavbarLink href={'https://omeroid.booth.pm'}>Shopping</NavbarLink>
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
        <Social type="facebook" url="https://fb.me/omeroid" />
      </Container>
    </Hero>
    <Container>
      <br />
      <Header borderBottom id="service" type="h1">
        <div id={'service'}>Service</div>
      </Header>
      <Features shadow showFooter={false} features={features} />
      <ImageList images={skill} />
    </Container>
    <Container>
      <Header borderBottom type="h1">
        <div id={'portfolio'}>Portfolio</div>
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
        <div id={'team'}>Team</div>
      </Header>
      <Team showBorder={false} members={team} />
    </Container>
    <Container>
      <Header borderBottom type="h1">
        <div id={'shopping'}>Shopping</div>
      </Header>
      <Section>
        <Container className="text-justify">
          <Row>
            {shopping.map(s => (
              <Column className="col-12 col-md-3">
                <a href={s.href}>
                  <img alt="" width="200" height="200" src={s.image} />
                </a>
                <Label className="widthMax" fontWeight="bold" textAlign="center" content={s.content} />
              </Column>
            ))}
          </Row>
        </Container>
      </Section>
    </Container>
    <Container>
      <Header borderBottom type="h1">
        <div id={'contactInfo'}>Contact Info</div>
      </Header>
      <ContactInfo
        showBorder
        showIcons
        lat={contactInfo.lat}
        lng={contactInfo.lng}
        locationApiKey={contactInfo.locationApiKey}
        address={contactInfo.address}
        email={contactInfo.email}
        website={contactInfo.website}
      />
    </Container>
    <Footer copyrightTextColor={'light'}>
      <Row>
        <Column className="col-sm-12 col-md">
          <Copyright showAllRightText={false} text={contactInfo.copyright} />
        </Column>
      </Row>
    </Footer>
  </div>
)
