import logo from "../img/fontbolt.png";
import loupe from "../img/icsearch.png";
import notif from "../img/icnotification.png";
import "../asset/navbar.css";

function Navbar() {
    return (
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

                </div>
            </div>
        </nav>
    );
};

export default Navbar;