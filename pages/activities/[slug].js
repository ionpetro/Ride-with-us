import Head from "next/head";
import React from "react";
import Activity from "../../components/Activity/Activity";
import Footer from "../../components/UI/Footer/Footer";
import ScrollableNavbar from "../../components/UI/ScrollableNavbar/ScrollableNavbar";
import { activities } from "../../data/activities";

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
  return {
    paths: [
      "/activities/parnassos",
      "/activities/kalavrita",
      "/activities/vasilitsa",
      "/activities/pavliani",
      "/activities/karditsa",
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const activity = activities.find((e) => {
    return e.slug === params.slug;
  });
  return {
    props: {
      data: activity,
    },
  };
}
export default ActivityPage;
