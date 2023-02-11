import React from 'react';
import Reservation from '../components/Reservation/Reservation';
import Footer from '../components/UI/Footer/Footer';
import ScrollableNavbar from '../components/UI/ScrollableNavbar/ScrollableNavbar';

const ReservationPage = () => {
  return (
    <div>
      <ScrollableNavbar />
      <Reservation />
      <Footer />
    </div>
  );
};

export default ReservationPage;
