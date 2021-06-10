import MeetupList from "../components/meetups/MeetupList";

const MEETUPS_DATA = [
  {
    id: "m1",
    title: "first Meetup",
    image:
      "https://www.ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg",
    address: "Yerevan, Opera",
  },
  {
    id: "m2",
    title: "second Meetup",
    image:
      "https://thumbs.dreamstime.com/z/republic-square-yerevan-armenia-yerevan-armenia-august-republic-square-fountain-clock-tower-armenia-capital-august-117656773.jpg",
    address: "Yerevan, Republic square",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: MEETUPS_DATA,
    },
    revalidate: 10,
  };
};

export default HomePage;
