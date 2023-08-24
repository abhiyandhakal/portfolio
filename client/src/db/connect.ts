import mongoose from "mongoose";
import { DB_URI } from "$env/static/private";

const connect = async () => {
	try {
		await mongoose.connect(DB_URI);
		console.log("MongoDB Connected");
	} catch (error) {
		console.log("MongoDB Connection Error");
		console.log(error);
	}
};

export default connect;
