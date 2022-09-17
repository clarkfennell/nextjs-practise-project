import { MongoClient } from 'mongodb';

async function handler(req, res) {
  // use try catch for error handling
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://admin:haBjUXh8qjDWM0xi@cluster0.iekjdnm.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = await db.collection('meetups');
    
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted successfully'});
  }
}

export default handler;