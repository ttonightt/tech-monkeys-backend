const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const authRouter = require("./src/controllers/authRouter");
const userRouter = require("./src/controllers/userRouter");
const chatRouter = require("./src/controllers/chatRouter");

const middleware = require("./src/utils/middleware");
const config = require("./src/utils/config");
const logger = require("./src/utils/logger");


const app = express();

const connectToDB = async () => {

	let uri;

	switch (config.NODE_ENV) {
		case "test":
		case "development":
			logger.info("DB is running on test Mongo Server");

			uri = config.MONGODB_URI_TEST;
			break;
		case "production":
			logger.info("DB is running on regular Mongo Server");

			uri = config.MONGODB_URI;
			break;
	}

	try {
		await mongoose.connect(uri);

		logger.info("Connected to MongoDB");
	} catch (e) {

		logger.error("Error was cought during connection to MongoDB:", e.message);
	}
};

connectToDB();

app.use("/", express.static("dist"));

app.use("/public", express.static("public"));
app.use(express.json());

app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);


app.use("/api/chat", chatRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.get("/*router", (req, res) => {

	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;