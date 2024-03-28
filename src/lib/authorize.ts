import { JWT_SECRET } from "$env/static/private";
import jwt from "jsonwebtoken";

const authorize = (token: string): boolean => {
	try {
		const decoded = jwt.verify(token as string, JWT_SECRET) as {
			username: string;
			password: string;
			iat: number;
			exp: number;
		};

		if (decoded.username === undefined || decoded.password === undefined) {
			return false;
		}

		return true;
	} catch (error) {
		return false;
	}
};

export default authorize;
