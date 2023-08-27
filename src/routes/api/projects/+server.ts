import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import Project from "$db/models/project";
import authorize from "$lib/authorize";

export const GET: RequestHandler = async () => {
	const projects = await Project.find({});

	return json({ success: true, data: projects }, { status: 200 });
};

export const POST: RequestHandler = async ({ request, cookies }) => {
	const token = cookies.get("token");

	if (!token) {
		return json({ success: false, error: "Unauthorized" }, { status: 401 });
	}

	if (!authorize(token as string)) {
		return json({ success: false, error: "Unauthorized" }, { status: 401 });
	}

	try {
		const data = await request.json();

		if (!data.name || !data.description || !data.platform || !data.repo) {
			return json({ success: false, error: "Missing required fields" }, { status: 400 });
		}

		if (!data.thumbnail) {
			return json({ success: false, error: "Project thumbnail not provided" }, { status: 400 });
		} else {
			if (!data.thumbnail.name) {
				return json(
					{ success: false, error: "Project thumbnail name not provided" },
					{ status: 400 }
				);
			}

			if (!data.thumbnail.buffer) {
				return json(
					{ success: false, error: "Project thumbnail buffer not provided" },
					{ status: 400 }
				);
			}

			if (!data.thumbnail.type) {
				return json(
					{ success: false, error: "Project thumbnail type not provided" },
					{ status: 400 }
				);
			}
			if (!data.thumbnail.type.toString().includes("image")) {
				return json(
					{ success: false, error: "Project thumbnail type not supported" },
					{ status: 400 }
				);
			}
		}

		const project = new Project({
			name: data.name,
			description: data.description,
			platform: data.platform,
			repo: data.repo,
			articleLink: data.relatedArticle ? data.relatedArticle : "",
			thumbnail: {
				name: data.thumbnail.name,
				type: data.thumbnail.type,
				buffer: data.thumbnail.buffer
			}
		});

		await project.save();

		return json({ success: true, data }, { status: 200 });
	} catch (error) {
		console.log(error);
		if (error instanceof SyntaxError) {
			return json({ success: false, error: "Invalid JSON" }, { status: 400 });
		} else return json({ success: false }, { status: 500 });
	}
};
