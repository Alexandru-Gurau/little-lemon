import { Routes, Route } from "react-router-dom";
import Homepage from "./home-page/homepage.jsx";
import Booking from "./booking-page/bookingPage.jsx";
import About from "./about/about.jsx";
import ConfirmPage from "./confirmation-page/confirmationPage.jsx";

const MainPage = () => (
  <main>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/about' element={<About />} />
      <Route path='/confirm' element={<ConfirmPage />} />
    </Routes>
  </main>
);

export default MainPage;
