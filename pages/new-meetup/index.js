import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function onAddMeetupHandler(entereData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(entereData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your own meetups!" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
