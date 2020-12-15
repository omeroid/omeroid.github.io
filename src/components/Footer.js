import React from 'react'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li> */}
            </ul>
            <ul className="footer_menu">
                <Link to="/privacyPolicy" className="link ">プライバシーポリシー</Link>
            </ul>
            <ul className="copyright">
                <li>&copy; 2020 omeroid Inc. All rights reserved.</li>
            </ul>
        </div>
    </footer>
)

export default Footer
