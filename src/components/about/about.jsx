import Welcome from "../welcome/welcome";
import insideRestaurantImage from "../../assets/images/restaurant.jpg";

import "./about.css";

const About = () => (
  <>
    <Welcome />
    <section className='about'>
      <p>
        Little Lemon is a nice bistro restaurant that servers simple and good
        tasted food and cocktails in a lovely environment. The restaurant
        features a locally-sourced menu with daily specials.
      </p>
      <img src={insideRestaurantImage} alt='Inside restaurant little lemon' />
    </section>
  </>
);

export default About;
