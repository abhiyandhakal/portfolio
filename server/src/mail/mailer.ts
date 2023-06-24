import nodemailer, { SentMessageInfo } from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS
	}
});

// create reusable sendmail function
interface MailDetails {
	from: string;
	to: string;
	subject: string;
	text: string;
	html: string;
}

interface Callback {
	(info: SentMessageInfo): void;
}

const sendMail = async (mailDetails: MailDetails, callback: Callback) => {
	try {
		const info: SentMessageInfo = await transporter.sendMail(mailDetails);
		callback(info);
	} catch (error) {
		console.log(error);
	}
};

export default sendMail;
