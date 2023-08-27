import mongoose, { Schema } from "mongoose";

export interface Project {
	name: string;
	description: string;
	platform: string;
	repo: string;
	articleLink?: string;
	thumbnail: {
		name: string;
		type: string;
		buffer: string;
	};
}

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
		type: {
			type: String,
			required: true
		},
		buffer: {
			type: String,
			required: true
		}
	}
});

export default mongoose.model("Project", ProjectSchema);
