import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import Footer from '../components/UI/Footer/Footer';
import ScrollableNavbar from '../components/UI/ScrollableNavbar/ScrollableNavbar';

const PrivacyPolicyPage = () => {
  return (
    <>
      <ScrollableNavbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
