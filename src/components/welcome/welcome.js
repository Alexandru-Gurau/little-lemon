import { useNavigate } from "react-router-dom";
import restaurantImage from "../../assets/images/restaurant-table.jpg";
import "./welcome.css";

function Welcome() {
  const navigate = useNavigate();

  function navigateToBooking() {
    navigate("/booking");
  }

  return (
    <section className='welcome'>
      <div className='welcome-container'>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with modern twist.
        </p>
        <button onClick={navigateToBooking} aria-label='Go to booking page'>
          Reserve a Table
        </button>
      </div>
      <div>
        <img
          src={restaurantImage}
          alt='Table in the restaurant'
          className='welcome-image'
        />
      </div>
    </section>
  );
}

export default Welcome;
