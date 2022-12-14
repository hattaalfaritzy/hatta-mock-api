const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema(
	{
		name: String,
		phone: String,
		email: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('listSchema', listSchema);