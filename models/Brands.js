const mongooose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_slug: {
        type: String,
        required: true
    },
    brand_description: {
        type: String
    },
    brand_img: {
        type: String
    },
    brans_is_on_top: {
        type: Boolean,
        default: false
    },
    brand_title: {
        type: String,
        required: true
    }
});

const Brand = mongoose.model('Brand', brandShema);

module.exports = Brand;