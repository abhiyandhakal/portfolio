import axios from "axios";
import type { PageServerLoad } from "./$types";
import { URL } from "$env/static/private";

export const load: PageServerLoad = async () => {
	try {
		const res = await axios.get(URL + "/api/projects/");
		const data = await res.data;
		console.log(data.data);

		return { projects: data.data };
	} catch (error) {
		console.log(error);

		return { projects: [] };
	}
};
