import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" className="alt">
        <nav>
            <button className="menu-link" onClick={props.onToggleMenu}>Menu</button>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
