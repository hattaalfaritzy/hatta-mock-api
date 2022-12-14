module.exports = app => {
	// BODY PARSER MIDDLEWARES
	const bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
}