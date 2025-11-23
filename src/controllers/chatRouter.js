const { GoogleGenAI } = require("@google/genai");
const messageUtil = require("../utils/messageUtil");
const config = require("../utils/config");
const middleware = require("../utils/middleware");

const chatRouter = require("express").Router();

const User = require("../models/userModel");

const ai = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });


chatRouter.post("/prepareFirstStep", middleware.userExtractor, async (req, res) => {

	const type = "{title: strings, description: string}[]";

	const prompt = `Based on the quiz data which skills or tools will be the best for the start? 5 max, may be only 1`;

	const user = await User
		.findById(req.user.id);

	const data = await ai.models.generateContent({
		model: "gemini-2.5-flash-lite",
		contents: messageUtil.build( user.chatHistory, prompt, type )
	});

	const json = JSON.parse( data.text.replace(/^```json\s+/, "").replace(/\s*```$/, "") );

	res.json(json);
});

module.exports = chatRouter;