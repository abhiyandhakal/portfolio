import { fail, type Actions } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import type { PageServerLoad } from "./$types";
import { JWT_SECRET } from "$env/static/private";

export const prerender = false;

export const load: PageServerLoad = async (event) => {
	const token = event.cookies.get("token");

	try {
		const decoded = jwt.verify(token as string, JWT_SECRET) as {
			username: string;
			password: string;
			iat: number;
			exp: number;
		};

		if (decoded.username === undefined || decoded.password === undefined) {
			return fail(401, {
				authenticated: false
			});
		}

		return {
			authenticated: true
		};
	} catch (error) {
		fail(401, {
			authenticated: false
		});
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