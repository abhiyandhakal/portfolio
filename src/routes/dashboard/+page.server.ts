import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import authorize from "$lib/authorize";

export const prerender = false;

export const load: PageServerLoad = async (event) => {
	const token = event.cookies.get("token");

	if (!token) {
		fail(401, {
			authenticated: false
		});
	}

	if (!authorize(token as string)) {
		fail(401, {
			authenticated: false
		});
	} else {
		return {
			authenticated: true
		};
	}
};

export const actions = {
	logout: ({ cookies }) => {
		cookies.delete("token");

		return {
			authenticated: false
		};
	}
} satisfies Actions;
