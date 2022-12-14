const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		email: String,
		password: String,
		role: String,
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

module.exports = mongoose.model('userSchema', userSchema);