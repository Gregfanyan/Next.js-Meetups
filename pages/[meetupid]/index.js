import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.ebrdgreencities.com/assets/headers/bffc190ea7/yerevan-header.jpg"
      title="First meetup"
      address="Yerevan, Charentsi 7"
      description="The first meetup"
    />
  );
}

export default MeetupDetails;
