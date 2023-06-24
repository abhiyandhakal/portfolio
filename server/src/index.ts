import express from "express";
import * as dontenv from "dotenv";
import userRouter from "./routes/user";
import connectDb from "./db/connect";

dontenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// user router
app.use("/api/users", userRouter);

(async function run() {
	try {
		await connectDb();

		app.listen(port, () => {
			console.log("listening to port " + port);
		});
	} catch (error) {
		console.log(error);
	}
})();
