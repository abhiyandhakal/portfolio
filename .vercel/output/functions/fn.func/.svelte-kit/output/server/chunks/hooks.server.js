import mongoose from "mongoose";
import { D as DB_URI } from "./private.js";
const connect = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Error");
    console.log(error);
  }
};
await connect();
