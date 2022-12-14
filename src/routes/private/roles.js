module.exports = (app) => {
	const router = require('express').Router();
	const rolesController = require('../../controllers/roles');
	const authController = require('../../controllers/auth');

	router.get('/', rolesController.get_all_data);
	router.get('/:id', rolesController.get_data_detail);
	router.post('/', rolesController.create_data);
	router.put('/:id', rolesController.update_data);
	router.delete('/:id', rolesController.delete_data);

	app.use('/private/roles', authController.validateUser, router);
};
