require("dotenv").config();

const PORT = Number(process.env.PORT);
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI_TEST = process.env.MONGODB_URI_TEST;
const NODE_ENV = process.env.NODE_ENV;
const SECRET = process.env.SECRET;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SESSION_TIMEOUT = process.env.SESSION_TIMEOUT || 3600;

module.exports = {MONGODB_URI, MONGODB_URI_TEST, PORT, NODE_ENV, SECRET, GEMINI_API_KEY, SESSION_TIMEOUT};