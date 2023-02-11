import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';
import React from 'react';
import HomePage from '../components/HomePage/HomePage';
import Seo from '../components/Seo';
import Navbar from '../components/UI/Navbar/Navbar';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home({ activities = [] }) {
  return (
    <>
      <Head>
        <title>Ride with us</title>
        <Seo />
      </Head>
      <Navbar />
      <HomePage activities={activities} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await supabase.from('activities').select();
  return {
    props: {
      activities: response.data,
    },
  };
}
