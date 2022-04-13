const express = require('express');
const router = express.Router();
const ProductModel = require('../models/products');
const productsController = require('../controllers/productsController');

// Adds new product into the database
router.post('/create', productsController.createProduct);

// Edit product into the database
router.post('/update/:id', productsController.updateProduct);

// Delete product from the database
router.delete('/delete/:id', productsController.deleteProduct);

// Remove product from user cart
router.post('/removeFromCart/:id', productsController.removeFromCart);

// Remove product from user history
router.post('/removeFromHistory/:id', productsController.removeFromHistory);

// Add product to user cart
router.post('/AddtoCart/:id', productsController.addToCart);

router.post('/AddtoHistory/:id', productsController.addToHistory);

// Api endpoint for products
router.get('/search', productsController.getAllProducts);

router.get('/inUserCart', productsController.getUserCart);

router.get('/inUserHistory', productsController.getUserHistory);

module.exports = router;
