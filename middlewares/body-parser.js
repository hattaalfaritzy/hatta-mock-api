// BODY PARSER MIDDLEWARES

module.exports = app => {
	const bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
}