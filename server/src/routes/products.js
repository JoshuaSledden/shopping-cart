const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// Get a list of all products within the database.
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Get a specific product from the database by ID.
router.get('/:productID', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productID);
        res.json(product);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Post a new product to the database.
router.post('/', async (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    });
    
    try {
        const newProduct = await product.save();
        res.json(newProduct);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Remove a product from the database by ID
router.delete('/:productID', async (req, res) => {
    try {
        const product = await Product.remove({_id: req.params.productID});
        res.json(product);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Patch a product from the database by ID
router.patch('/:productID', async (req, res) => {
    try {
        const product = await Product.updateOne(
            { _id: req.params.productID },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price
                }
            }
        );

        res.json(product);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// Put a product from the database by ID
router.put('/:productID', async (req, res) => {
    try {
        const product = await Product.updateOne(
            { _id: req.params.productID },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price
                }
            }
        );
        res.json(product);
    }
    catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;