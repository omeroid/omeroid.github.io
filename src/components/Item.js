import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

function OptionalLink(props) {
  const { to, className, children }= props;
  if (to) {
    return <Link to={to} className={className}>
      {children}
    </Link>
  } else {
    return <div className={className}>
      {children}
    </div>
  }
}

function Image(props) {
  const { image, imageAlt }= props;
  if (image) {
    return <OptionalLink to={props.to} className="image fit">
      <img src={image} alt={imageAlt} />
    </OptionalLink>
  } else {
    return <div></div>
  }
}

const Item = (props) => (
  <section>
      <Image image={props.image} to={props.to}></Image>
      <div className="content">
          <div className="inner">
              <header className="major">
                <h3>{props.title}</h3>
              </header>
              <p>{props.content}</p>
              {props.to &&
                <ul className="actions">
                    <li><Link to={props.to} className="button" >詳細を見る</Link></li>
                </ul>
              }
          </div>
      </div>
  </section>
)

Item.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
}

export default Item