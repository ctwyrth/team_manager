const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [5, "Should be more than 5 characters."]
	},
	position: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [5, "Should be more than 5 characters."]
	},
	attendance: {
		game1: Boolean,
		game2: Boolean,
		game3: Boolean
	}
}, {timestamps: true});

module.exports.Player = mongoose.model("Player", PlayerSchema);
