import Head from 'next/head';
import React from 'react';
import HomePage from '../components/HomePage/HomePage';
import Seo from '../components/Seo';
import Navbar from '../components/UI/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ride with us</title>
        <Seo />
      </Head>
      <Navbar />
      <HomePage />
    </>
  );
}
