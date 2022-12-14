const usersModel = require("../models/users");

exports.get_all_data = (req, res, next) => {
	usersModel.find({}, (err, result) => {
		if (err) {
			next(err);
		} else {
			res.json({
				message: 'Get All Data Users!',
				data: result
			});
		}
	});
};

exports.get_data_detail = (req, res, next) => {
	usersModel.find({ _id: req.params.id }, (err, result) => {
		if (err) {
			// res.status(404).send('user not found')
			next(err);
		} else {
			res.json({
				message: 'Get Data Detail User!',
				data: result
			});
		}
	});
};

exports.create_data = (req, res, next) => {
    const new_data = new usersModel(req.body);
    new_data.save((err, result) => {
        if (err) {
            next(err);
        }
        else {
			firebase.auth().createUser(req.body)
			.then(data => {
				res.json({
					message: 'New User Registered!',
					data: data
				});
			}).catch(err => {
				next(err);
			})
        }
    });
};

exports.update_data = function(req, res, next) {
	const update_data = req.body;
    usersModel.findOneAndUpdate({ _id: req.params.id}, update_data, {new: true}, (err, result) => {
        if (err){
            next(err);}
        else{
            res.json({
				message: 'Data User Edited!',
				data: result
			});
        }
    });
};

exports.delete_data = (req, res, next) => {
	usersModel.deleteMany({ _id: req.params.id }, (err, result) => {
		if (err) {
			next(err);
		} else {
			res.json({ 
				message: 'Data User Deleted!', 
				data: result 
			});
		}
	});
};