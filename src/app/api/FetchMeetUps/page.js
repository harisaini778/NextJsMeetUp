import { MongoClient } from "mongodb";


//POST /api/FetchMeetUps

const Handler = async (req, res) => {
    if (req.method === "POST") {

        const data = req.body;
        
        const client = await MongoClient.connect("mongodb+srv://harikumarsaini778:YvzVgLvcF7li45fa@cluster0.ynieqkf.mongodb.net/meetups?retryWrites=true&w=majority");

        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne({ data });
        
        console.log(result);

        client.close();

        res.status(201).json({ message: "Meetup inserted!" });

}
    
}

export default Handler;