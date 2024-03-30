import type { Blog } from "$types";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const prerender = false;

export const load: PageServerLoad = async (event) => {
	const { params, fetch } = event;
	const id = (params as { id: string })?.id;
	const res = await fetch("/api/blogs");
	const blogs: Blog[] = await res.json();
	const blog = blogs.find((blog) => blog.id === id);
	if (!blog) {
		error(404, { message: "Blog not found" });
	}

	return blog;
};
