import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://greg:@zSUwx8WL8#z!s6@meetup.p8ssa.mongodb.net/meetup?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetup");
    const result = await meetupCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;
