import { a as USERNAME, P as PASS, J as JWT_SECRET } from "../../../chunks/private.js";
import { f as fail } from "../../../chunks/index.js";
import jwt from "jsonwebtoken";
const prerender = false;
const actions = {
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
      maxAge: 24 * 60 * 60,
      // 1 day
      httpOnly: true,
      sameSite: "lax"
    });
    return {
      message: "Successfully logged in"
    };
  }
};
export {
  actions,
  prerender
};
