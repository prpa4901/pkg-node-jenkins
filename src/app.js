const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// API endpoints
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Node.js DevOps Test App!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'UP' });
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app; // Export for testing