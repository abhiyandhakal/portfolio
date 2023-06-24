import mongoose from "mongoose";

const connect = async () => {
	try {
		const conn = await mongoose.connect(process.env.DB_URI || "");
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error}`);
		process.exit(1);
	}
};

export default connect;
