import type { Blog } from "../../app";
import type { PageServerLoad } from "./$types";

export const prerender = false;

export const load: PageServerLoad = async (event) => {
	const res = await event.fetch("/api/blogs");
	const blogs: Blog[] = await res.json();

	return { blogs };
};
