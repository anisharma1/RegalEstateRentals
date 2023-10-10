import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/userRoute.js";

const app = express();
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

mongoose
	.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

app.get("/", (req, res) => {
	res.send("Hello");
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});

app.use("/api/user", userRouter);
