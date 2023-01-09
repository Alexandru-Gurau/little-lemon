import logo from "../../assets/images/little-lemon-logo.png";
import Navigation from "../navigation/navigation";
import "./header.css";

const Header = () => (
  <header>
    <img src={logo} alt='Little Lemon Logo' className='header-logo' />
    <Navigation />
  </header>
);

export default Header;
