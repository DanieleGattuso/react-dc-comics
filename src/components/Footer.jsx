export default function Footer(props) {
    const { appCategory1, appCategory2, appCategory3, appCategory4 } = props;

    return (
        <footer>
            <div className="footer_container">

                <div className="footer_links_container">
                    <div className="tiny_container">
                        <ul>
                            <li><span>DC COMICS</span></li>
                            {appCategory2.map((category) =>
                                <li key={category.id}>{category.text}</li>)}
                        </ul>

                        <ul>
                            <li><span>SHOP</span></li>
                            {appCategory3.map((category) =>
                                <li key={category.id}>{category.text} </li>)}
                        </ul>
                    </div>

                    <div className="tiny_container">
                        <ul>
                            <li><span>DC</span></li>
                            {appCategory1.map((category) =>
                                <li key={category.id}>{category.text}</li>)}
                        </ul>

                    </div>

                    <div className="tiny_container">
                        <ul>
                            <li><span>SITES</span></li>
                            {appCategory4.map((category) =>
                                <li key={category.id}>{category.text}</li>)}
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