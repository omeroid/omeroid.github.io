import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import IconTitleBox from '../components/IconTitleBox'

const Content1 = (props) => (
  <section key={props.key} className="content-1" style={{ width: props.width, height: props.height }}>
    <IconTitleBox key={props.key} icon={props.image} title={props.title} accent={props.accent} />
    <div className="content-area">{props.content}</div>
  </section >
)

Content1.propTypes = {
  key: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  accent: PropTypes.string,
  content: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Content1
