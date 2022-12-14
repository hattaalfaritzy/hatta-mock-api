module.exports = (app) => {
	const router = require('express').Router();
	const productsController = require('../../controllers/products');
	const authController = require('../../controllers/auth');

	router.get('/', productsController.get_all_data);
	router.get('/:id', productsController.get_data_detail);
	router.post('/', productsController.create_data);
	router.put('/:id', productsController.update_data);
	router.delete('/:id', productsController.delete_data);

	app.use('/private/products', authController.validateUser, router);
};
