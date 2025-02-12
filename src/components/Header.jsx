// Header
export default function Header() {
    return (
        <header>

            <div className="header_container">

                <div className="logo_container">
                    <figure>
                        <img src="../img/dc-logo.png" alt="Logo" />
                    </figure>
                </div>

                <div className="nav_container">
                    <nav>
                        <ul>
                            <li><a href="#">CHARACTERS</a></li>
                            <li><a href="#" className="active">COMICS</a></li>
                            <li><a href="#">MOVIES</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">GAMES</a></li>
                            <li><a href="#" className="active">COLLETIBLES</a></li>
                            <li><a href="#">VIDEOS</a></li>
                            <li><a href="#">FANS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">SHOP</a></li>
                        </ul>
                    </nav>

                </div>

            </div>

        </header>
    );
}