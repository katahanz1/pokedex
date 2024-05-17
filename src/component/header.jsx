import '../styles/header.css'
import logo from '../assets/logo.png';


const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo pokemon" className="logo" />
        </header>
    );
};

export default Header;
