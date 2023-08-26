import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	platform: {
		type: String,
		required: true
	},
	repo: {
		type: String,
		required: true,
		unique: true
	},
	articleLink: {
		type: String
	},
	thumbnail: {
		name: {
			type: String,
			required: true
		},
		buffer: {
			type: Buffer,
			required: true
		}
	}
});

export default mongoose.model("Project", ProjectSchema);
