import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home/ホーム</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">News/ニュース</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Service/事業内容</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Member/メンバー</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Recruit/採用</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Shop/ショップ</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
