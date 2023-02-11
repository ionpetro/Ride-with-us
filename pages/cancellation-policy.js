import React from 'react';
import CancellationPolicy from '../components/CancellationPolicy/CancellationPolicy';
import Footer from '../components/UI/Footer/Footer';
import ScrollableNavbar from '../components/UI/ScrollableNavbar/ScrollableNavbar';

const CancellationPolicyPage = () => {
  return (
    <div>
      <ScrollableNavbar />
      <CancellationPolicy />
      <Footer />
    </div>
  );
};

export default CancellationPolicyPage;
