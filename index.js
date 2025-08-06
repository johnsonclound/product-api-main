const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/db'); // Import the database connection
const productRoutes = require('./routes/productRoutes'); // Import product routes

app.use(express.json());
app.use('/api', productRoutes); // Use product routes under /api path

// Start server

app.listen(PORT, () => {

          console.log(`🚀 Server is running at http://localhost:${PORT}`);

});