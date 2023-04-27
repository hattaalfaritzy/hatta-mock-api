module.exports = (app) => {
    const router = require('express').Router();
    const authController = require('../../controllers/auth');

    router.post('/login', authController.authenticate);
    router.post('/login/firebase', authController.authenticateFirebase);
    router.post('/register', authController.register);

    app.use('/private/auth', authController.validateUser, router);
};
