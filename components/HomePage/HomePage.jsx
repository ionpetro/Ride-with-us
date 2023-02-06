import React from "react";
import Activities from "./Activities/Activities";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Events from "./Events/Events";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Events />
      <Activities />
      <Contact />
    </>
  );
};

export default HomePage;
