import React from 'react';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../components/UI/Footer/Footer';
import ScrollableNavbar from '../components/UI/ScrollableNavbar/ScrollableNavbar';

const Page404 = () => {
  return (
    <>
      <ScrollableNavbar />
      <NotFound />
      <Footer />
    </>
  );
};

export default Page404;
