const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        image: String,
        name: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('productsSchema', productsSchema);
