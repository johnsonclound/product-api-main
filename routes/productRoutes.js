const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Get all products
router.get('/products', productController.getAllProducts);

// Get product by ID
router.get('/products/:id', productController.getAllProducts);

// Search product by keyword
router.get('/products/search/:keyword', productController.getAllProducts);

// Create product
router.post('/products', productController.getAllProducts);

// Update product
router.put('/products/:id', productController.getAllProducts);

// Soft delete product
router.delete('/products/:id', productController.getAllProducts);

// Restore product
router.put('/products/restore/:id', productController.getAllProducts);

// Export the router to use in index.js
module.exports = router;