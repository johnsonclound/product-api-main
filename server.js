const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const productRoutes = require('./routes/productRoutes'); // Import product routes
const webRoutes = require('./routes/webRoutes'); // Import web routes

app.set('views', path.join(__dirname, 'views')); // Set views directory
app.set('view engine', 'ejs'); // Set EJS as the view engine

app.use(express.json());
app.use('/api', productRoutes); // Use product routes under /api path
app.use('/', webRoutes); // Use web routes under root path

// Start server

app.listen(PORT, () => {
          console.log(`🚀 Server is running at http://localhost:${PORT}`);
});