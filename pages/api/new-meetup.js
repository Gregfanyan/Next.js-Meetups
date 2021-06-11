import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetupCollection = db.collection("meetup");
    const result = await meetupCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;
