const mongoose = require("mongoose");
const app = require("../app");
const supertest = require("supertest");

const api = supertest(app);


//test("user create", async () => {

//	const user = {
//		username: "ttonightt",
//		password: "Tonight"
//	};

//	const res = await api
//		.post("/api/users")
//		.send(user)
//		.expect(201);
//});

//test("user login", async () => {

//	const user = {
//		username: "ttonightt",
//		password: "Tonight"
//	};

//	const res = await api
//		.post("/api/auth")
//		.send(user)
//		.expect(200);

//	console.log(res.body);
//});

test("chat", async () => {

	const res = await api
		.post("/api/chat/prepareFirstStep")
		.send({})
		.expect(201);
});