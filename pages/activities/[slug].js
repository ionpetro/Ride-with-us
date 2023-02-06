import React from "react";
import Activity from "../../components/Activity/Activity";
import Footer from "../../components/UI/Footer/Footer";
import ScrollableNavbar from "../../components/UI/ScrollableNavbar/ScrollableNavbar";

const ActivityPage = ({ data }) => {
  return (
    <div>
      <ScrollableNavbar />
      <Activity data={data} />
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/activities/parnassos"],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = {
    title: "Παρνασσός",
    fullTitle: "Μονοήμερη στο χιονοδρομικό του Παρνασσού",
    shortDescription: "Μονοήμερη στο χιονοδρομικό του Παρνασσού",
    description:
      "Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world.",
    image_url: "/assets/images/sports/parnassos.jpg",
    price: 50,
  };
  return {
    props: {
      data,
    },
  };
}
export default ActivityPage;
