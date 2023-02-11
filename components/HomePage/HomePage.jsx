import React from 'react';
import Footer from '../UI/Footer/Footer';
import Activities from './Activities/Activities';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Events from './Events/Events';

const HomePage = ({ activities }) => {
  return (
    <>
      <Banner />
      <Events />
      <Activities activities={activities} />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
