const rolesModel = require('../models/roles');

exports.get_all_data = (req, res, next) => {
    rolesModel.find({}, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Get All Data Roles!',
                data: result,
            });
        }
    });
};

exports.get_data_detail = (req, res, next) => {
    rolesModel.find({ _id: req.params.id }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Get Data Detail Role!',
                data: result,
            });
        }
    });
};

exports.create_data = (req, res, next) => {
    const newData = new rolesModel(req.body);
    newData.save((err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'New Data Role Created!',
                data: result,
            });
        }
    });
};

exports.updateData = (req, res, next) => {
    const updateData = req.body;
    rolesModel.findOneAndUpdate({ _id: req.params.id }, updateData, { new: true }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Data Role Edited!',
                data: result,
            });
        }
    });
};

exports.delete_data = (req, res, next) => {
    rolesModel.deleteMany({ _id: req.params.id }, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'Data Role Deleted!',
                data: result,
            });
        }
    });
};
