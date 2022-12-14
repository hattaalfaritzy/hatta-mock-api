module.exports = app => {
	const router = require('express').Router();
	const productsController = require('../../controllers/products');
	
	router.get('/', productsController.get_all_data);
	router.get('/:id', productsController.get_data_detail);

	app.use('/products', router);
};