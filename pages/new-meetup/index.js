import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
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
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;
