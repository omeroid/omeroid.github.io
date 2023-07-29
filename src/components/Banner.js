// import React from 'react'

// const Banner = (props) => (
//     <section id="banner" className="major">
//         <div className="inner">
//             <header className="major">
//                 <h1>omeroid</h1>
//             </header>
//             <div className="content">
//                 <p>エンジニア・コンサルタントのプロ集団<br />
//                 「Make it simple」をテーマに顧客のビジネスサポートや自社サービス開発を行っています</p>
//                 {/* <ul className="actions">
//                     <li><a href="#one" className="button next scrolly">Get Started</a></li>
//                 </ul> */}
//             </div>
//         </div>
//     </section>
// )

// export default Banner

import React from 'react'
import PropTypes from 'prop-types'
import logo from '../assets/images/logo/omeroid_w.svg'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="style2" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="inner">
            <Link to="/"><img src={logo} alt="omeroid" to="/" /></Link>
            <div className="content">
                <p>{props.content}</p>
            </div>
        </div>
    </section>
)

Banner.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
}

export default Banner
