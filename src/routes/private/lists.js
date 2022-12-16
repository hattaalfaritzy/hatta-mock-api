module.exports = (app) => {
    const router = require('express').Router();
    const listsController = require('../../controllers/lists');
    const authController = require('../../controllers/auth');

    router.get('/', listsController.get_all_data);
    router.get('/:id', listsController.get_data_detail);
    router.post('/', listsController.create_data);
    router.put('/:id', listsController.updateData);
    router.delete('/:id', listsController.delete_data);

    app.use('/private/lists', authController.validateUser, router);
};
