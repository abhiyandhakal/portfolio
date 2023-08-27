import { J as JWT_SECRET } from "./private.js";
import jwt from "jsonwebtoken";
const authorize = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.username === void 0 || decoded.password === void 0) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
export {
  authorize as a
};
