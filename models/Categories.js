const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_slug: {
        type: String,
        required: true
    },
    category_description: {
        type: String
    },
    category_img: {
        type: String
    },
    category_is_on_top: {
        type: Boolean,
        default: false
    },
    category_title: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;