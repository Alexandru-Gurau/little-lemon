import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className='navigation'>
    <Link to='/' className='navigation-link'>
      Homepage
    </Link>
    <Link to='/about' className='navigation-link'>
      About
    </Link>
    <Link to='/booking' className='navigation-link'>
      Booking
    </Link>
  </nav>
);

export default Navigation;
