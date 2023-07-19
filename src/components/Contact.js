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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5882.464330296581!2d139.77295345690138!3d35.678013037910915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188958b6c58567%3A0xcdd2199ea87a51a8!2z5rC45LqV44OT44Or77yI5YWr5LiB5aCA77yJ!5e0!3m2!1sja!2sjp!4v1689755874220!5m2!1sja!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.5852516080654!2d135.16429647642937!3d34.2336069730892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b293191322dd%3A0xc9d777405979bce!2z44Ov44Kr44Ok44Oe56ys77yS5Yao5aOr44Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1684801503883!5m2!1sja!2sjp" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
                        <div><b>東京オフィス</b></div>
                        <span>東京都中央区八丁堀3-1-7<br />
                            永井ビル2階
                        </span>
                        <br />
                        <br />
                        <div><b>和歌山オフィス</b></div>
                        <span>和歌山県和歌山市湊紺屋町1-20<br />
                            Kinowa（キノワ）201号
                        </span>
                        <br />
                        <br />
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
