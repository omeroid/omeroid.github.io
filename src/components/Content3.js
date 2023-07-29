import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classNames from "classnames";

const Content3 = (props) => (
  <section key={props.key} className="content-3" style={{ width: props.width }}>
    <div className={classNames("container")}>
      <div className={classNames("title-area")}>
        {props.title}
      </div>
      <div className="content-area">
        <img src={props.image} />
      </div>
    </div>

  </section >
)

Content3.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
}

export default Content3
