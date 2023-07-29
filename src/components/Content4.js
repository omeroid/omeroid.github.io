import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classNames from "classnames";

const Content4 = (props) => (
  <section key={props.key} className="content-4">
    <div className={classNames("container", `bg-${props.accent}`)}>
      <div className={classNames("title-area")}>
        {props.title}
      </div>
      <div className="content-area">
        {props.content}
      </div>
    </div>

  </section >
)

Content4.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  accent: PropTypes.string,
  width: PropTypes.string,
}

export default Content4
