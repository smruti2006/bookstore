import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const URI = process.env.MongodbURI;
const connectDB = async () => {
  try {
    if(!URI){
      throw new Error("URI not found")
    }
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

export default connectDB;
