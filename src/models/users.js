const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        email: String,
        password: String,
        name: String,
        phone: String,
    },
    {
        timestamps: true,
    }
);

// eslint-disable-next-line func-names
usersSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

module.exports = mongoose.model('usersSchema', usersSchema);
