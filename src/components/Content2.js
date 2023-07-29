import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import IconTitleBox from '../components/IconTitleBox'

const Content2 = (props) => (
  <section key={props.key} className="content-2">
    <div className={`container ${props.accent} `}>
      <div className="left">
        <div className="icon-area">
          <img src={props.image} />
        </div>
      </div>
      <div className="right">
        <div className="title-area">{props.title}</div>
        <div className="content-area">{props.content}</div>
      </div>
    </div>

  </section >
)

Content2.propTypes = {
  key: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  accent: PropTypes.string,
  content: PropTypes.string,
}

export default Content2
