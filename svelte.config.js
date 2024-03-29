import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"]
		})
	],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			$components: "./src/components",
			$styles: "./src/styles",
			$db: "./src/db",
			$lib: "./src/lib",
			$data: "./src/data"
		}
	},
	extensions: [".svelte", ".md"]
};

export default config;
