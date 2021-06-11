import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });
  const db = client.db();
  const meetupCollection = db.collection("meetup");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupid: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupid;

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });
  const db = client.db();
  const meetupCollection = db.collection("meetup");

  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
