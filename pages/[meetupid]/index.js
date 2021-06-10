import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://www.ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg"
      title="First meetup"
      address="Yerevan, Charentsi 7"
      description="The first meetup"
    />
  );
}

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupid;

  return {
    props: {
      meetupData: {
        image:
          "https://www.ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Yerevan, Charentsi 7",
        description: "The first meetup",
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
