import mongoose from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config();

const connStr = process.env.mongo_URI;

async function connectDB() {
  try {
    await mongoose.connect(connStr);
    console.log("DB connected!");
  } catch (err) {
    console.error(err);
    process.exit();
  }
}



export default connectDB;
