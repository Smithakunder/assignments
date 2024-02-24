// routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middleware/validationMiddleware');

// Sample data for retrieving all authors
const authors = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// Sample data for retrieving all blogs
const blogs = [
  { id: 1, title: 'First Blog', author: 'John Doe' },
  { id: 2, title: 'Second Blog', author: 'Jane Smith' }
];

// Sample data for retrieving a specific blog
const blogById = {
  1: { id: 1, title: 'First Blog', author: 'John Doe' },
  2: { id: 2, title: 'Second Blog', author: 'Jane Smith' }
};

// Login endpoint
// Sample data for login endpoint
// {
//   "username": "johndoe",
//   "password": "123456"
// }
router.post('/login', validationMiddleware, (req, res) => {
  // Authentication logic would be here
  res.json({ message: 'Login endpoint' });
});

// Register endpoint
// Sample data for registration endpoint
// {
//   "name": "John Doe",
//   "password": "123456"
// }
router.post('/register', validationMiddleware, (req, res) => {

  res.json({ message: 'Register endpoint' });
});


router.get('/authors', (req, res) => {
  res.json({ authors });
});

// Retrieve all blogs
router.get('/blogs', (req, res) => {
  res.json({ blogs });
});

// Retrieve specific blog based on author's ID
router.get('/blogs/:authorId', (req, res) => {
  const authorId = parseInt(req.params.authorId);
  if (isNaN(authorId) || authorId < 1 || authorId > 2) {
    return res.status(404).json({ message: 'Author not found' });
  }

  const blog = blogById[authorId];
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  res.json({ blog });
});

module.exports = router;

