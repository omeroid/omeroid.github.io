import React from 'react'
import PropTypes from 'prop-types'
import { window } from 'ssr-window';

import Item from './Item'

const sliceByNumber = (array, number) => {
    if(!number){
        return [array]
    }
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
    const pageBlocks = sliceByNumber(props.items, props.pageSize)
    const maxPage = pageBlocks.length
    currentPage = currentPage > maxPage ? 1 : currentPage

    const currentBlock = pageBlocks[currentPage - 1]
    console.log('currentBlock', currentBlock)
    return(
        <section id="two" className="spotlights">
            { currentBlock.map(i => {
                return <Item key={i.title} image={i.image} imageAlt={i.imageAlt} to={i.to} title={i.title} content={i.content} >{props.children}</Item>
            }) }
            <Optional show={maxPage > 1}>
                <div className="pagination-wrap">
                    <ul className="pagination">
                        <li><a href={`?page=${currentPage-1}`} className={`button small ${currentPage == 1 ? 'disabled': ''}`}>Prev</a></li>
                        { pageBlocks.map((_, index) => {
                            return <Page number={index+1} current={currentPage} />
                        }) }
                        <li><a href={`?page=${currentPage+1}`} className={`button small ${currentPage == maxPage ? 'disabled': ''}`}>Next</a></li>
                    </ul>
                </div>
            </Optional>
        </section>
    )
}

ListItem.propTypes = {
  items: PropTypes.array,
  pageSize: PropTypes.number,
}

export default ListItem
