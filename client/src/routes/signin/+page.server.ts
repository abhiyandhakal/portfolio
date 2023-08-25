import { PASS, USERNAME, JWT_SECRET } from "$env/static/private";
import { fail, type Actions } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export const prerender = false;

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		if (data.get("username") !== USERNAME || data.get("password") !== PASS) {
			console.log(data.get("username"), USERNAME);

			return fail(401, {
				error: "Invalid username or password"
			});
		}

		const token = jwt.sign({ username: USERNAME, password: PASS }, JWT_SECRET, {
			expiresIn: "1d"
		});

		event.cookies.set("token", token, {
			maxAge: 24 * 60 * 60, // 1 day
			httpOnly: true,
			sameSite: "lax"
		});

		return {
			message: "Successfully logged in"
		};
	}
} satisfies Actions;
