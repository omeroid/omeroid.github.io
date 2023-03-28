import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import MessengerCustomerChat from 'react-messenger-customer-chat'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

import bannerImage from '../assets/images/banner.jpg'
import serviceImage from '../assets/images/service.jpg'
import newsImage from '../assets/images/news.jpg'
import memberImage from '../assets/images/member.png'
import recruitImage from '../assets/images/recruit.jpg'
import blogImage from '../assets/images/blog.jpg'
import shopImage from '../assets/images/shop.jpg'
import logoImage from '../assets/images/logo/omeroid_icon.svg'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import engineerImage from '../assets/images/service/engineer.jpg'
import consultantImage from '../assets/images/service/consultant.jpg'
import productImage from '../assets/images/service.jpg'


const title = "omeroid"
const content = ["エンジニア・コンサルタントのプロ集団", <br />, "「Make it simple」をテーマに顧客のビジネスサポートや自社サービス開発を行っています"]

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="omeroid（オメロイド）"
                    meta={[
                        { name: 'description', content: content },
                        { name: 'keywords', content: 'omeroid, オメロイド' },
                    ]}
                >
                </Helmet>

                <Banner title={title} content={content} image={bannerImage} />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${newsImage})` }}>
                            <header className="major">
                                <h3>News</h3>
                                <p>ニュース</p>
                            </header>
                            <Link to="/news" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${engineerImage})` }}>
                            <header className="major">
                                <h3>IT</h3>
                                <p>ITコンサルティング・システム開発サービス</p>
                            </header>
                            <Link to="/service/it" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${consultantImage})` }}>
                            <header className="major">
                                <h3>Consulting</h3>
                                <p>業務コンサルティングサービス</p>
                            </header>
                            <Link to="/service/consulting" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${productImage})` }}>
                            <header className="major">
                                <h3>Product</h3>
                                <p>プロダクト</p>
                            </header>
                            <Link to="/service/product" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${recruitImage})` }}>
                            <header className="major">
                                <h3>Recruit</h3>
                                <p>採用</p>
                            </header>
                            <Link to="https://www.wantedly.com/companies/company_5409883" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${shopImage})` }}>
                            <header className="major">
                                <h3>Shop</h3>
                                <p>ショップ</p>
                            </header>
                            <Link to="https://omeroid.booth.pm/" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${logoImage})` }}>
                            <header className="major">
                                <h3>Blog</h3>
                                <p>omeroidの様子をお届けします</p>
                            </header>
                            <Link to="/blogs" className="link primary"></Link>
                        </article>
                    </section>
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}
                </div>
                <Contact />
                <MessengerCustomerChat pageId="1970520546574914" appId="1634817276825716" />
            </Layout>
        )
    }
}

export default HomeIndex
