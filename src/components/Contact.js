import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                {/* <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.7566924725716!2d139.73111291895378!3d35.59283017027911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018602cc78d3ae9%3A0x5813ff4e337fdd46!2z44CSMTQwLTAwMTMg5p2x5Lqs6YO95ZOB5bed5Yy65Y2X5aSn5LqV77yW5LiB55uu77yU4oiS77yS77ySIOadseS6rOODjeOCquODsw!5e0!3m2!1sja!2sjp!4v1602571746495!5m2!1sja!2sjp" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-building-o"></span>
                        <h3>会社概要</h3>
                        <div><b>社名</b></div>
                        <span>omeroid株式会社</span>
                        <br />
                        <br />
                        <div><b>代表者</b></div>
                        <span>代表取締役社長 CEO　松野貞之<br />
                        </span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">inquiry@omeroid.com</a>
                    </div>
                </section>
                {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section> */}
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <div><b>事務所</b></div>
                        <span>東京都品川区南大井6-4-22<br />
                        東京ネオンビル2F シェルパ・アンド・カンパニー
                        </span>
                        <br />
                        <br />
                        <div><b>登記住所</b></div>
                        <span>東京都大田区平和島6丁目1番1号<br />
                        東京流通センターB棟1階(W1-4~7)まつの内
                        </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
