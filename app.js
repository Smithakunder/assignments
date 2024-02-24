const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Built-in middleware for parsing JSON requests

// Routes
const authorRoutes = require('./routes/authorRoutes');
const blogRoutes = require('./routes/blogRoutes');
app.use('/authors', authorRoutes);
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
