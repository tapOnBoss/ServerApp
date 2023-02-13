const mongooose = require('mongoose');

const brandCategorySchema = new mongoose.Shema({
    category_slug: {
        type: String,
        required: true
    },
    brand_slug: {
        type: String,
        required: true
    }
});

const BrandCategory = mongoose.model('BrandCategory', brandCategorySchema);

module.exports = BrandCategory;