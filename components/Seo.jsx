import React from "react";
import Head from "next/head";
import structuredData from "../utils/structuredData";

const Seo = () => {
  return (
    <Head>
      <meta
        name={"description"}
        content={"The official ride with us website."}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="RIDE WITH US" />
      <meta
        property="og:description"
        content="The official ride with us site"
      />
      <meta
        property="og:image"
        content="https://cmztnvjqtpaelezqtxhw.supabase.co/storage/v1/object/sign/assets/rwu.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvcnd1LnBuZyIsImlhdCI6MTY3NTg3NDA1NCwiZXhwIjoxNzA3NDEwMDU0fQ.Nt608lCLylvBSya5LOD9RkNZ_20topwKidpLQSX_PdA&t=2023-02-08T16%3A34%3A22.940Z"
      />
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
