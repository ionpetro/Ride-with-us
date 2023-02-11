import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';
import React from 'react';
import Activity from '../../components/Activity/Activity';
import Footer from '../../components/UI/Footer/Footer';
import ScrollableNavbar from '../../components/UI/ScrollableNavbar/ScrollableNavbar';
import { activities } from '../../data/activities';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ActivityPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div>
        <ScrollableNavbar />
        <Activity data={data} />
        <Footer />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await supabase.from('activities').select();
  const paths = response.data.map((activity) => `/activities/${activity.slug}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await supabase.from('activities').select();

  const activity = response.data.find((e) => {
    return e.slug === params.slug;
  });
  return {
    props: {
      data: activity,
    },
  };
}
export default ActivityPage;
