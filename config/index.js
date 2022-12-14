const mongoose = require('mongoose');
require('dotenv/config');

const dbConfig = process.env.DB_CONNECTION;

mongoose.Promise = global.Promise;

module.exports = {
	mongoose: mongoose,
	url: dbConfig,
	port: process.env.DB_PORT || 4000,
	secret_key: process.env.SECRET_KEY
}