import Head from "next/head";
import React from "react";
import About from "../components/About/About";
import Footer from "../components/UI/Footer/Footer";
import ScrollableNavbar from "../components/UI/ScrollableNavbar/ScrollableNavbar";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Ride with us</title>
      </Head>
      <ScrollableNavbar />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
