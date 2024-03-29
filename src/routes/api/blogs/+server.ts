import { json } from "@sveltejs/kit";
import type { BlogMetadata } from "../../../app";

function pathToId(path: string): string {
	const id = path.split("/")?.pop()?.replace(".md", "");
	return id || "";
}

export function GET() {
	const blogsGlob = import.meta.glob<Record<string, any>>("/src/blogs/*.md", { eager: true });

	const blogs = Object.entries(blogsGlob).map(([path, blog]) => {
		const id = pathToId(path);
		const metadata: BlogMetadata = blog.metadata;

		const content = blog.default.$$render ? blog.default.$$render() : "";

		return { id, metadata, content };
	});

	return json(blogs);
}
