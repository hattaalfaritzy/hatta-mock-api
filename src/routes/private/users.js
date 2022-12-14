module.exports = app => {
	const router = require('express').Router();
	const usersController = require('../../controllers/users');
	const authController = require('../../controllers/auth');

	router.get('/', usersController.get_all_data);
	router.get('/:id', usersController.get_data_detail);
	router.put('/:id', usersController.update_data);
	router.delete('/:id', usersController.delete_data);

	app.use('/private/users', authController.validateUser, router);
};