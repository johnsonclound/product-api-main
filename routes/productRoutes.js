const express = require('express');
const router = express.Router();

const db = require('../config/db');
const productController = require('../controllers/productController');
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Product management operations
 */

// Get all products
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve all products
 *     tags:
 *       - Products
 *     responses:
 *       '200':
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/products', productController.getAllProducts);

// Get product by ID
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to retrieve
 *     responses:
 *       200:
 *         description: The ID of the product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get('/products/:id', productController.getProductById);

// Search product by keyword
/**
 * @swagger
 * /api/products/search/{keyword}:
 *   get:
 *     summary: Search products by keyword
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: The keyword to search for
 *     responses:
 *       200:
 *         description: A list of matching products
 */
router.get('/products/search/:keyword', productController.searchProducts);

// Create product
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post('/products', productController.createProduct);

// Update product
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 */
router.put('/products/:id', productController.updateProduct);

// Soft delete product
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Soft delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to soft delete
 *     responses:
 *       200:
 *         description: Product soft deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete('/products/:id', productController.softDeleteProduct);

// Restore product
/**
 * @swagger
 * /api/products/restore/{id}:
 *   put:
 *     summary: Restore a soft-deleted product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to restore
 *     responses:
 *       200:
 *         description: Product restored successfully
 *       404:
 *         description: Product not found or not soft-deleted
 */
router.put('/products/restore/:id', productController.restoreProduct);

// Export the router to use in index.js
module.exports = router;