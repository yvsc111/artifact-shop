const express = require('express');
const router = express.Router();
const Product = require('../models/product');


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    const formattedProducts = products.map(product => ({
      ...product.toObject(),
      id: product._id,
    }));

    res.json(formattedProducts);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.json(product);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.get('/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.put('/:id/rating', async (req, res) => {
  try {
    const { rating } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    // Calculate new average rating
    const newNumReviews = product.numReviews + 1;
    const newRatingSum = product.rating * product.numReviews + rating;
    const newAverageRating = newRatingSum / newNumReviews;

    // Update product with the new average rating and review count
    product.rating = newAverageRating;
    product.numReviews = newNumReviews;

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
