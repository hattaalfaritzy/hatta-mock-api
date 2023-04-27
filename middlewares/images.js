// IMAGE MIDDLEWARES

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const path = require('path');

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'hatta-mock-api-images',
        format: async () => 'png',
        public_id: (req, file) => `hatta-mock-api-images.${Date.now()}${path.extname(file.originalname)}`,
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 1000000 },
}).single('image');

module.exports = {
    upload,
};
