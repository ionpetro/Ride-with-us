import React from 'react';
import CancellationPolicy from '../components/CancellationPolicy/CancellationPolicy';
import CookiesPolicy from '../components/CookiesPolicy/CookiesPolicy';
import Footer from '../components/UI/Footer/Footer';
import ScrollableNavbar from '../components/UI/ScrollableNavbar/ScrollableNavbar';

const CancellationPolicyPage = () => {
  return (
    <div>
      <ScrollableNavbar />
      <CookiesPolicy />
      <Footer />
    </div>
  );
};

export default CancellationPolicyPage;
