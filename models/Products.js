const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_slug: {
        type: String,
        required: true
    },
    product_description: {
        type: String
    },
    product_img: {
        type: String
    },
    product_is_on_top: {
        type: Boolean,
        default: false
    },
    product_title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;