const db = require('../config/db'); // Import the database connection
const Product = require('../models/productModel'); // Import the product model

const productController = {
      getAllProducts: (req, res) => {
            Product.getAll((err, results) => {
                  if (err) return res.status(500).json({ error: err.message });
                  res.json(results);
            });
      },

      getProductById: (req, res) => {
            Product.getById(req.params.id, (err, result) => {
                  if (err) return res.status(500).json({ error: err.message });
                  res.json(result[0] || {});
            })
      },

      searchProduct: (req, res) => {
            const { keyword } = req.params;
            Product.searchByKeyword(keyword, (err, results) => {
                  if (err) return res.status(500).json({ error: err.message });
                  res.json(results);
            });
      },

      createProduct: (req, res) => {

            const { name, price } = req.body;
            if (!name || price == null) {
                  return res.status(400).json({ error: 'Name and price are required' });
            }

            Product.create(req.body, (err, result) => {
                  if (err) return res.status(500).json({ error: err.message });
                  res.status(201).json({ id: result.insertId, ...req.body });
            });
      },

      updateProduct: (req, res) => {

            const { id } = req.params;
            Product.update(id, req.body, (err, result) => {
                  if (err) return res.status(500).json({ error: err.message });
                  if (result.affectedRows === 0) {
                        return res.status(404).json({ error: 'Product not found' });
                  }
                  res.json({ message: 'Product updated successfully' });
            });
      },
      softDeleteProduct: (req, res) => {

            const { id } = req.params;
            Product.softDelete(id, (err, result) => {
                  if (err) return res.status(500).json({ error: err.message });
                  if (result.affectedRows === 0) {
                        return res.status(404).json({ error: 'Product not found' });
                  }
                  res.json({ message: 'Product soft deleted successfully' });
            });
      },

      restoreProduct: (req, res) => {

            const { id } = req.params;
            Product.restore(id, (err, result) => {
                  if (err) return res.status(500).json({ error: err.message });
                  if (result.affectedRows === 0) {
                        return res.status(404).json({ error: 'Product not found' });
                  }
                  res.json({ message: 'Product restored successfully' });
            });
      },

      getProductsView: (req, res) => {
            Product.getAll((err, results) => {
                  if (err) return res.status(500).json({ error: err.message });
                  res.render('products', { products: results });
            });
      }
};

// Export the product controller for use in routes
module.exports = productController;