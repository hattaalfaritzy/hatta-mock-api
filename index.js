const express = require('express');
const database = require('./config');

const app = express();

database.mongoose
	.connect(database.url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Database Connected');
	})
	.catch((err) => {
		console.log(err, 'Database Cannot Connect!');
		process.exit();
	});

// SET SECRETKEY
require('./config/secret-key')(app);

// MIDDLEWARES
require('./middlewares/body-parser')(app);
require('./middlewares/cors')(app);
require('./middlewares/handle-error')(app);

app.listen(database.port, () => {
	console.log(`Server is running on PORT:${database.port}`);
});
