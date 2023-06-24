import express from "express";
import { getUsers, login, register, userStatus, verifyUser } from "../controllers/user";

const router = express.Router();

router.get("/", getUsers);
router.get("/status", userStatus);
router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyUser);

export default router;
