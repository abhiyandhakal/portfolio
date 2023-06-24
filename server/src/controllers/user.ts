import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/user";
import jwt, { JwtPayload } from "jsonwebtoken";
import mailTemplate from "../mail/template";
import * as EmailValidator from "email-validator";
import sendMail from "../mail/mailer";

// @desc    Get user userStatus
// @route   GET /api/users/status
// @access  Private
export const userStatus = asyncHandler(async (_req: Request, res: Response) => {
	res.json({ user: "logged in" });
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const login = asyncHandler(async (req: Request, res: Response) => {
	const { email } = req.body;

	if (!email) {
		res.status(400);
		throw new Error("Please provide email");
	}

	const user = await User.findOne({ email });

	if (!user) {
		res.status(404);
		throw new Error("User not found");
	}

	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "", {
		expiresIn: "1h"
	});

	const message = `<a style="color: #ddd;" href="http://localhost:${
		process.env.PORT || 3000
	}/api/users/verify?token=${token}">Click here to verify.</a>`;
	const title = "Finish Logging In";

	const options = {
		from: `${process.env.MAIL_NAME} <${process.env.MAIL_USER}>`,
		to: email,
		subject: title,
		text: message,
		html: mailTemplate(message, title)
	};

	try {
		await sendMail(options, (info) => {
			console.log("Email Sent successfully\nMessage ID: ", info.messageId);
		});

		res.json({ success: true, message: "Check your email to finish logging in" });
	} catch (_error) {
		res.status(500);
		throw new Error("Failed to send email");
	}
});

// @desc    Register user
// @route   POST /api/users/register
// @access  Public
export const register = asyncHandler(async (req: Request, res: Response) => {
	const { email, name } = req.body;

	if (!name || !email) {
		res.status(400);
		throw new Error("Please provide both name and email");
	}

	const userAvailable = await User.findOne({ email });

	if (userAvailable) {
		res.status(400);
		throw new Error("User already exists");
	}

	if (!EmailValidator.validate(email)) {
		res.status(400);
		throw new Error("Please provide a valid email");
	}

	const user = await User.create({ name, email });

	if (user) {
		res.status(201).json({ success: true, user });
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

// @desc		Verify user
// @route		POST /api/users/verify
// @access	Public
export const verifyUser = asyncHandler(async (req: Request, res: Response) => {
	const { token } = req.query;

	if (!token) {
		res.status(401);
		throw new Error("Please provide a token");
	}

	try {
		const decoded = jwt.verify(token as string, process.env.JWT_SECRET || "") as JwtPayload;
		const user = await User.findById(decoded.id);

		if (!user) {
			res.status(404);
			throw new Error("User not found");
		}

		const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET || "", {
			expiresIn: "7d"
		});

		res.status(200).json({ success: true, accessToken });
	} catch (e) {
		res.status(401);
		throw new Error(e as string);
	}
});

// @desc		Get all users
// @route		GET /api/users
// @access	Private
export const getUsers = asyncHandler(async (_req: Request, res: Response) => {
	const users = await User.find({});

	res.json({ success: true, users });
});
