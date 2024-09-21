
import mongoose from "mongoose";

// Declare the MongoDB URI and database name
const MONGODB_URI = "mongodb://localhost:27017";
const DB_NAME = "E-com";

const connectDB = async () => {
  try {

    const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);

    // Log successful connection
    console.log(`\nMongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
  } catch (error) {

    console.log("Error in connectDB: ", error);
    // process.exit(1); // Exit the process with failure
  }
};

export default connectDB;