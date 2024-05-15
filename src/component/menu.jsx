import '../styles/menu.css'
import logo from '../assets/logo.png';


const Menu = () => {
    return (
        <header>
            <img src={logo} alt="logo pokemon" className="logo" />
        </header>
    );
};

export default Menu;
