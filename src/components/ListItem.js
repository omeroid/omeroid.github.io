import React from 'react'
import PropTypes from 'prop-types'
import { window } from 'ssr-window';

import Item from './Item'

// function OptionalLink(props) {
//   const { to, className, children }= props;
//   if (to) {
//     return <Link to={to} className={className}>
//       {children}
//     </Link>
//   } else {
//     return <div className={className}>
//       {children}
//     </div>
//   }
// }

// function Image(props) {
//   const { image, imageAlt }= props;
//   if (image) {
//     return <OptionalLink to={props.to} className="image">
//       <img src={image} alt={imageAlt} />
//     </OptionalLink>
//   } else {
//     return <div></div>
//   }
// }

const sliceByNumber = (array, number) => {
    console.log('array', array)
    console.log('number', number)
    const length = Math.ceil(array.length / number)
    return new Array(length).fill().map((_, i) =>
        array.slice(i * number, (i + 1) * number)
    )
}

const getUrlParams = ()  => {
    const urlParamStr = window.location.search.substring(1)
    let params = {}
    urlParamStr.split('&').forEach( param => {
    const keyVal = param.split('=')
        params = {
            ...params,
            [keyVal[0]]: keyVal[1]
        }
    })
    return params
}

function Optional(props) {
    const { children, show }= props;
    return show ? <div>{children}</div> : <div></div>
}

function Page(props) {
    const { number, current }= props;
    return <li><a href={`?page=${number}`} className={number == current ? 'page active' : 'page'}>{number}</a></li>
}
  

const ListItem = (props) => {
    const params = getUrlParams()
    let currentPage = parseInt(params['page']) || 1
    const pageBlocks = sliceByNumber(props.items, 10)
    const maxPage = pageBlocks.length
    currentPage = currentPage > maxPage ? 1 : currentPage

    const currentBlock = pageBlocks[currentPage - 1]
    return(
        <section id="two" className="spotlights">
            { currentBlock.map(i => {
                console.log('i', i)
                return <Item image={i.image} imageAlt={i.imageAlt} to={i.to} title={i.title} content={i.content} >{props.children}</Item>
            }) }
            <Optional show={maxPage > 1}>
                <div className="pagination-wrap">
                    <ul className="pagination">
                        <li><span className={`button small ${currentPage == 1 ? 'disabled': ''}`}>Prev</span></li>
                        { pageBlocks.map((_, index) => {
                            return <Page number={index+1} current={currentPage} />
                        }) }
                        {/* <Page number={1} current={currentPage} /> */}
                        {/* <li><a href="?page=1" className="page active">1</a></li>
                        <li><a href="?page=2" className="page">2</a></li>
                        <li><a href="?page=3" className="page">3</a>    </li>
                        <li><span>&hellip;</span></li>
                        <li><a href="#" className="page">8</a></li>
                        <li><a href="#" className="page">9</a></li>
                        <li><a href="#" className="page">10</a></li> */}
                        <li><a href={`?page=${currentPage+1}`} className={`button small ${currentPage == maxPage ? 'disabled': ''}`}>Next</a></li>
                    </ul>
                </div>
            </Optional>
        </section>
    )
}

ListItem.propTypes = {
  items: PropTypes.array,
}

export default ListItem