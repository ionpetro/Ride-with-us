import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';
import React from 'react';
import Event from '../../components/Event/Event';
import Footer from '../../components/UI/Footer/Footer';
import ScrollableNavbar from '../../components/UI/ScrollableNavbar/ScrollableNavbar';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const EventPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div>
        <ScrollableNavbar />
        <Event data={data} />
        <Footer />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await supabase.from('events').select();
  const paths = response.data.map((event) => `/events/${event.slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await supabase.from('events').select();

  const event = response.data.find((e) => {
    return e.slug === params.slug;
  });
  return {
    props: {
      data: event,
    },
  };
}
export default EventPage;
