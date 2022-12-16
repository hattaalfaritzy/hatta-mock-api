// IMAGE MIDDLEWARES

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const path = require('path');

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'hatta-mock-api-images',
		format: async (req, file) => 'png',
		public_id: (req, file) => {
			return 'hatta-mock-api-images.' + Date.now() + path.extname(file.originalname);
		},
	},
});

const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
}).single('image');

module.exports = {
	upload: upload,
};
