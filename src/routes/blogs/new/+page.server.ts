import { PASS, EMAIL, JWT_SECRET } from "$env/static/private";
import { fail, type Actions } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
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
	default: async (event) => {
		const data = await event.request.formData();
		const cookies = event.cookies;

		const storedToken = cookies.get("token");

		storedToken &&
			jwt.verify(storedToken, JWT_SECRET, (err) => {
				if (err) {
					cookies.set("token", "", { maxAge: 0 });
				}
			});

		storedToken &&
			jwt.verify(storedToken, JWT_SECRET, (err) => {
				if (err) {
					cookies.set("token", "", { maxAge: 0 });
				}
			});

		if (data.get("username") !== EMAIL || data.get("password") !== PASS) {
			return fail(401, {
				success: false,
				error: "Invalid username or password"
			});
		}

		const token = jwt.sign({ username: EMAIL, password: PASS }, JWT_SECRET, {
			expiresIn: "1d"
		});

		event.cookies.set("token", token, {
			maxAge: 24 * 60 * 60, // 1 day
			httpOnly: true,
			sameSite: "lax"
		});

		return {
			success: true,
			message: "Successfully logged in"
		};
	}
} satisfies Actions;
