const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema(
	{
		name: String,
		role_access: Array,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('roleSchema', roleSchema);