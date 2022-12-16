const listsModel = require('../models/lists');

exports.get_all_data = (req, res, next) => {
    listsModel.find({}, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Get All Data Lists!',
                data: result,
            });
        }
    });
};

exports.get_data_detail = (req, res, next) => {
    listsModel.find({ _id: req.params.id }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Get Data Detail List!',
                data: result,
            });
        }
    });
};

exports.create_data = (req, res, next) => {
    const newData = new listsModel(req.body);
    newData.save((err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'New Data List Created!',
                data: result,
            });
        }
    });
};

exports.updateData = (req, res, next) => {
    const updateData = req.body;
    listsModel.findOneAndUpdate({ _id: req.params.id }, updateData, { new: true }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Data List Edited!',
                data: result,
            });
        }
    });
};

exports.delete_data = (req, res, next) => {
    listsModel.deleteMany({ _id: req.params.id }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Data List Deleted!',
                data: result,
            });
        }
    });
};
