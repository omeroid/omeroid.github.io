import React from 'react'
import { Link } from 'gatsby'

const Footer = (_props) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
        <li>
          <a
            href="https://www.facebook.com/omeroid"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li> */}
      </ul>
      <ul className="footer_menu">
        <Link
          to="https://omeroid.notion.site/e6608dcc19e3414aa7458e0a6bf00145?pvs=4"
          className="link "
        >
          プライバシーポリシー
        </Link>
        <Link
          to="https://omeroid.notion.site/141be5a46ca842dab09bc66fbc965bd2?pvs=4"
          className="link"
        >
          情報セキュリティ方針
        </Link>
      </ul>
      <ul className="footer_menu">
        <div className="footer_joins_title">加入団体</div>
        <div className="footer_joins_contents">
          特定非営利活動法人金融ＩＴ協会®（FITA）
        </div>
        <div className="footer_joins_contents">
          一般社団法人アジア経営者連合会
        </div>
        <div className="footer_joins_contents">
          一般社団法人東京ニュービジネス協議会
        </div>
        <div className="footer_joins_contents">東京城西ロータリークラブ</div>
      </ul>
    </div>
  </footer>
)

export default Footer
