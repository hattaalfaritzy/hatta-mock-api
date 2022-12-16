const productsModel = require('../models/products');
const images = require('../../middlewares/images');

exports.get_all_data = (req, res, next) => {
    productsModel.find({}, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Get All Data Products!',
                data: result,
            });
        }
    });
};

exports.get_data_detail = (req, res, next) => {
    productsModel.find({ _id: req.params.id }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Get Data Detail Product!',
                data: result,
            });
        }
    });
};

exports.create_data = (req, res, next) => {
    images.upload(req, res, (err) => {
        const newData = req.body;

        if (req.file != null) {
            newData.image = req.file.filename;
        }

        const newDataProduct = new productsModel(newData);
        if (err) {
            next(err);
        } else {
            newDataProduct.save((error, result) => {
                if (error) {
                    next(error);
                } else {
                    res.json({
                        status: 'Success',
                        message: 'New Data Product Created!',
                        data: result,
                    });
                }
            });
        }
    });
};

exports.updateData = (req, res, next) => {
    upload(req, res, (err) => {
        const updateData = req.body;

        if (req.file != null) {
            updateData.image = req.file.filename;
        }

        if (err) {
            next(err);
        } else {
            productsModel.findOneAndUpdate({ _id: req.params.id }, updateData, { new: true }, (error, result) => {
                if (error) {
                    next(error);
                } else {
                    res.json({
                        message: 'Data Product Updated!',
                        data: result,
                    });
                }
            });
        }
    });
};

exports.delete_data = (req, res, next) => {
    productsModel.deleteMany({ _id: req.params.id }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Data Product Deleted!',
                data: result,
            });
        }
    });
};
