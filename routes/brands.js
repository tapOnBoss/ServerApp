const express = require('express');
const router = express.Router();
const Brand = require('../models/Brands');

// Get all brands
router.get('/', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one brand
router.get('/:id', getBrand, (req, res) => {
    res.json(res.brand);
});

// Create one brand
router.post('/', async (req, res) => {
    const brand = new Brand({
        brand_slug: req.body.brand_slug,
        brand_description: req.body.brand_description,
        brand_img: req.body.brand_img,
        brand_is_on_top: req.body.brand_is_on_top,
        brand_title: req.body.brand_title
});
try {
    const newBrand = await brand.save();
    res.status(201).json(newBrand);
} catch (err) {
    res.status(400).json({ message: err.message });
}
});

// Update one brand
router.patch('/:id', getBrand, async (req, res) => {
    if (req.body.brand_slug != null) {
        res.brand.brand_slug = req.body.brand_slug;
    }
    if (req.body.brand_description != null) {
        res.brand.brand_description = req.body.brand_description;
    }
    if (req.body.brand_img != null) {
        res.brand.brand_img = req.body.brand_img;
    }
    if (req.body.brand_is_on_top != null) {
        res.brand.brand_is_on_top = req.body.brand_is_on_top;
    }
    if (req.body.brand_title != null) {
        res.brand.brand_title = req.body.brand_title;
    }
    try { const updatedBrand = await res.brand.save();
        res.json(updatedBrand);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// delete one brand
router.delete('\:id', getBrand, async (req, res) => {
    try {await res.brand.remove();res.json(
        { message: 'Deleted This Brand' });
    }catch (err) {res.status(500).json({ message: err.message 
    });
}});