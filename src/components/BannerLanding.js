import React from 'react'
import PropTypes from 'prop-types'

const BannerLanding = (props) => (
    <section id="banner" className="style2" style={{backgroundImage: `url(${props.image})`}}>
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                <p>{props.content}</p>
            </div>
        </div>
    </section>
)

BannerLanding.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
}

export default BannerLanding
