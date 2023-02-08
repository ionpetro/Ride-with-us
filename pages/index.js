import Head from "next/head";
import React from "react";
import HomePage from "../components/HomePage/HomePage";
import Navbar from "../components/UI/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ride with us</title>
      </Head>
      <Navbar />
      <HomePage />
    </>
  );
}
