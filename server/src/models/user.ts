import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, "Please provide email"],
			unique: [true, "Email address already taken"]
		},
		name: {
			type: String,
			required: [true, "Please provide your name"]
		}
	},
	{
		_id: true
	}
);

export default mongoose.model("User", userSchema);
