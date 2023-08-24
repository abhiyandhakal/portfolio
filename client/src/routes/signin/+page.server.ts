import { PASS, USERNAME } from "$env/static/private";
import { fail, type Actions } from "@sveltejs/kit";

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

		return {
			message: "Login Successful"
		};
	}
} satisfies Actions;
