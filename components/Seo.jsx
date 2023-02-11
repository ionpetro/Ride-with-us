import React from 'react';
import Head from 'next/head';
import structuredData from '../utils/structuredData';

const Seo = () => {
  return (
    <Head>
      <meta
        name={'description'}
        content={'The official ride with us website.'}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="RIDE WITH US" />
      <meta
        property="og:description"
        content="The official ride with us site"
      />
      <meta property="og:image" content="https://i.ibb.co/5Ydf7dc/rwu.png" />
      <meta property="og:url" content="https://www.ridewithus.gr" />
      <meta property="og:site_name" content="Ride with us" />
      <meta name="twitter:title" content="Ride with us" />
      <meta
        name="twitter:description"
        content="The official ride with us site"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      ></script>
    </Head>
  );
};

export default Seo;
