import logo from "../img/fontbolt.png";
import loupe from "../img/loupe.png";
import notif from "../img/notification.png";
import "../asset/navbar.css";

function Navbar() {
    return (
    <header>
        <nav>
            <div className="navBlock">
                <img src={logo} alt="Logo NitFlex" className="logo"/>
                <ul className="navList">
                    <li>Acceuil</li>
                    <li>Séries</li>
                    <li>Films</li>
                    <li>Nouveautés les plus regardées</li>
                    <li>Ma liste</li>
                    <li>Explorer la langue</li>
                </ul>
            </div>
            <div className="navIcons">

                <div>
                    <img src={loupe} alt="" className="navIcon1"/>
                </div>

                <div>
                    <img src={notif} alt="" className="navIcon2"/>
                </div>

                <div>
                    3
                </div>
            </div>
        </nav>
    </header> 
    );
};

export default Navbar;