import React from 'react'
import PropTypes from 'prop-types'

const IconTitleBox = (props) => (
  <section key={props.key} className="icon-title-box">
    <div className={`container ${props.accent}`}>
      <div className="image-area">
        <img src={props.icon} alt={props.title} />
      </div>
      <div className="title-area">
        <span>{props.title}</span>
      </div>
    </div>
  </section>
)

IconTitleBox.propTypes = {
  key: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  accent: PropTypes.string,
}

export default IconTitleBox
