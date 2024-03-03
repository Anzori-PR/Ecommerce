const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve db.json
app.get('/api/products', (req, res) => {
  const dbData = require('./db.json');
  res.json(dbData.products);
});

app.get('/api/cart', (req, res) => {
  const dbData = require('./db.json');
  res.json(dbData.cart);
});

// Serve Angular app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
