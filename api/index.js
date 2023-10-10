import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();
const app = express();

const MONGO_URL = process.env.MONGO_URL;
mongoose
	.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

app.use(express.json());

app.listen(3000, () => {
	console.log("Server running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
