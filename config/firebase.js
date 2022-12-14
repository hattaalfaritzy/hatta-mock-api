const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin');
require('dotenv/config');

const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.GOOGLE_DATABASE_URL,
});

module.exports = firebase;
