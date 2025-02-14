export default function Footer(props) {
    const { appCategory1, appCategory2, appCategory3, appCategory4 } = props;

    return (
        <footer>
            <div className="footer_container">

                <div className="footer_links_container">
                    <div className="tiny_container">
                        <ul>
                            <li><span>DC COMICS</span></li>
                            {appCategory1.map((category) => <li key={category.id}>{category.text}</li>)}
                        </ul>

                        <ul>
                            <li><span>SHOP</span></li>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>

                    <div className="tiny_container">
                        <ul>
                            <li><span>DC</span></li>
                            <li> Terms Of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>

                    <div className="tiny_container">
                        <ul>
                            <li><span>SITES</span></li>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>

                </div>





                <div className="footer_logo_container">
                    <img src="../public/img/dc-logo-bg.png" alt="" />
                </div>



            </div>

            <div className="bottom_footer">

            </div>
        </footer>
    )
}