import MeetupList from "../components/meetups/MeetupList";

const MEETUPS_DATA = [
  {
    id: Math.random() * 100,
    title: "first Meetup",
    image:
      "https://www.ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg",
    address: "Yerevan, Opera",
  },
  {
    id: Math.random() * 100,
    title: "second Meetup",
    image:
      "https://thumbs.dreamstime.com/z/republic-square-yerevan-armenia-yerevan-armenia-august-republic-square-fountain-clock-tower-armenia-capital-august-117656773.jpg",
    address: "Yerevan, Republic square",
  },
];

function HomePage() {
  return (
    <div>
      <MeetupList meetups={MEETUPS_DATA} />
    </div>
  );
}

export default HomePage;
