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
  Link,
} from '@front10/landing-page-book/dist/components'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import MessengerCustomerChat from 'react-messenger-customer-chat'
// import Helmet from "react-helmet";

import SEO from '../components/seo/seo'

import particles from '../data/particles.json'
import features from '../data/features.json'
import team from '../data/team.json'
import skill from '../data/skill.json'
import shopping from '../data/shopping.json'
import contactInfo from '../data/contactInfo.json'
import companyInfo from '../data/companyInfo.json'

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
            <NavbarLink href={'#companyInfo'}>Company Info</NavbarLink>
            <NavbarLink href={'#contactInfo'}>Contact</NavbarLink>
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
      <Header borderBottom type="h1">
        <div id={'service'} className={'anchor'}>Service</div>
      </Header>
      <Features shadow showFooter={false} features={features} />
      <ImageList images={skill} />
    </Container>
    <br />
    <Container>
      <Header borderBottom type="h1">
        <div id={'portfolio'} className={'anchor'}>Portfolio</div>
      </Header>
      <Card
        title="CEO 松野貞之がVulsのコミッターに登録"
        summary={`弊社CEOの松野貞之がOSS脆弱性検知ツールのVulsのメインコミッターの一員となりました。</br>
            コミッターとは、特定のリポジトリに対して、Write権限(Push権限)を持つことを意味しています。</br>
            VulsはFuture株式会社の神戸康多氏が開発公開したOSSであり、Golangで書かれた脆弱性検知ツールです。</br>
            現在のGithubスター数は6000を超え、国産OSSソフトウェアでは最大級のリポジトリとなっています。`}
        image="images/portfolio/vuls_logo_large.png"
        contentAlign="left"
        imageCircle={false}
        subTitle="2019/02/01"
      >
        <Link href="https://github.com/future-architect/vuls" target="_blank">
          <Image
            alt="vuls stars"
            src="https://img.shields.io/github/stars/future-architect/vuls.svg"
          />
        </Link>
      </Card>
    </Container>
    <br />
    <Container>
      <Header borderBottom type="h1">
        <div id={'team'} className={'anchor'}>Team</div>
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
                <Label
                  className="widthMax"
                  fontWeight="bold"
                  textAlign="center"
                  content={s.content}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Section>
    </Container>
    <Container>
      <Header borderBottom type="h1">
        <div id={'companyInfo'} className={'anchor'}>Company Information</div>
      </Header>
      <Table className="company-table">
        <TableBody>
          {companyInfo.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
    <Container>
      <Header borderBottom type="h1">
        <div id={'contactInfo'} className={'anchor'}>Contact</div>
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
