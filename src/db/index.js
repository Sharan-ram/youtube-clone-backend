import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_STRING}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected successfully, DB Host ${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.log("mongodb connection error : ", e);
    process.exit(1);
  }
};

export default connectDB;
