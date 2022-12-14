const productsModel = require('../models/products');
const images = require('../../middlewares/images');

exports.get_all_data = (req, res, next) => {
	productsModel.find({}, (err, result) => {
		if (err) {
			next(err);
		} else {
			res.json({
				message: 'Get All Data Products!',
				data: result
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
				data: result
			});
		}
	});
};

exports.create_data = (req, res, next) => {
	images.upload(req, res, (err) => {
		const new_data = req.body;

		if (req.file != null) {
			new_data.image = req.file.filename;
		}

		const new_data_product = new productsModel(new_data);
		if (err) {
			next(err);
		} else {
			new_data_product.save((err, result) => {
				if (err) {
					next(err);
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

exports.update_data = (req, res, next) => {
	upload(req, res, (err) => {
		const update_data = req.body;

		if (req.file != null) {
			update_data.image = req.file.filename;
		}

		if (err) {
			next(err);
		} else {
			productsModel.findOneAndUpdate({ _id: req.params.id }, update_data, { new: true }, (err, result) => {
				if (err) {
					next(err);
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
				data: result 
			});
		}
	});
};
