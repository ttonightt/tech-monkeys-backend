const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
	role: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

const interestSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	weight: {
		type: String,
		required: true
	}
});

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	passwordHash: {
		type: String,
		required: true
	},
	chatHistory: {
		messages: { type: [ messageSchema ], default: [] },
		interests: { type: [ interestSchema ], default: [] },
		blacklisted: { type: [ String ], default: [] }
	}
});

userSchema.set("toJSON", {
	transform: (doc, returned) => {

		returned.id = returned._id.toString();
		delete returned.passwordHash;
		delete returned._id;
		delete returned.__v;
	}
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;