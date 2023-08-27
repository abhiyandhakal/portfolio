import "../../../chunks/index.js";
import { a as authorize } from "../../../chunks/authorize.js";
const prerender = false;
const load = async (event) => {
  const token = event.cookies.get("token");
  if (!authorize(token))
    ;
  else {
    return {
      authenticated: true
    };
  }
};
const actions = {
  logout: ({ cookies }) => {
    cookies.delete("token");
    return {
      authenticated: false
    };
  }
};
export {
  actions,
  load,
  prerender
};
