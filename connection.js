
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");

const uri = "mongodb+srv://krithishridhar3:longleg123@cluster0.krxurnz.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const connectDb = async () => {
    try {
      const connect = await mongoose.connect('mongodb+srv://krithishridhar3:longleg123@cluster0.krxurnz.mongodb.net/?appName=Cluster0');
      console.log(
        "Database connected: ",
        connect.connection.host,
        connect.connection.name
      );
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  
    
  }
module.exports=connectDb;