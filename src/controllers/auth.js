const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usersModel = require('../models/users');
const config = require('../../config');
const firebase = require('../../config/firebase');

exports.authenticate = (req, res, next) => {
    usersModel.findOne({ email: req.body.email }, (err, userInfo) => {
        if (err) {
            next(err);
        } else if (userInfo !== null) {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({ data: userInfo }, req.app.get('secret-key'), { expiresIn: '1d' });
                res.json({
                    status: 'Success',
                    message: 'User Found!',
                    data: { token },
                });
            } else {
                res.json({
                    status: 'Error',
                    message: 'Invalid Password!',
                    data: null,
                });
            }
        } else {
            res.json({
                status: 'Error',
                message: 'Invalid Email!',
                data: null,
            });
        }
    });
};

exports.authenticateFirebase = (req, res, next) => {
    usersModel.findOne({ email: req.body.email }, (err, userInfo) => {
        if (err) {
            next(err);
        } else if (userInfo !== null) {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({}, config.secret_key, { expiresIn: '1d' });
                firebase.auth().createCustomToken(token);
                res.json({
                    status: 'Success',
                    message: 'User Found!',
                    data: {
                        userInfo,
                        token,
                    },
                });
            } else {
                res.json({
                    status: 'Error',
                    message: 'Invalid Password!',
                    data: null,
                });
            }
        } else {
            res.json({
                status: 'Error',
                message: 'Invalid Email!',
                data: null,
            });
        }
    });
};

exports.register = (req, res, next) => {
    const newData = new usersModel(req.body);
    newData.save((err) => {
        if (err) {
            next(err);
        } else {
            firebase
                .auth()
                .createUser(req.body)
                .then((data) => {
                    res.json({
                        message: 'New User Registered!',
                        data,
                    });
                })
                .catch((error) => {
                    next(error);
                });
        }
    });
};

exports.validateUser = (req, res, next) => {
    // const bearerToken = req.headers.authorization;
    // const token = bearerToken.split("Bearer ")[1];
    const token = req.headers['x-access-token'];
    jwt.verify(token, req.app.get('secret-key'), (err) => {
        if (err) {
            res.json({
                status: 'Error',
                message: err.message,
                data: null,
            });
        } else {
            next();
        }
    });
};
