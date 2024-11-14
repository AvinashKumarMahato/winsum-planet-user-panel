const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any other requests by sending the main index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Set the port (default to 3000 if not set in environment)
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
