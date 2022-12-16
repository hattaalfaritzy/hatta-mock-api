const admin = require('firebase-admin');
require('dotenv/config');

const serviceAccount = require('./json/hatta-mock-api-firebase.json');

firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.GOOGLE_DATABASE_URL,
});

module.exports = firebase;
