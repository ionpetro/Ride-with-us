import React from "react";
import Activities from "./Activities/Activities";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Events />
      <Activities />
    </>
  );
};

export default HomePage;
