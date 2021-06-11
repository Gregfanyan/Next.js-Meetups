import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React meetup</title>
        <meta
          name="Next.js tutorial"
          content="browse a huge list of higly active meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

/* export const getServerSideProps = async (context) => {
  const res = context.res;
  const req = context.req;

  return {
    props: {
      meetups: MEETUPS_DATA,
    },
  };
}; */

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupCollection = db.collection("meetup");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
