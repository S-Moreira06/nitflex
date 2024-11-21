import Menu from "./MenuFooter";
import facebook from "../img/ic.png";
import instagram from "../img/icinsta.png";

const list1 = ["Item1","Item2","Item3","Item4"];

function Footer() {
    return (
        <footer>
            <div>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
            </div>
            <div>
                <div>
                    <Menu list={list1} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;