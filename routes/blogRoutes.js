// routes/blogRoutes.js
const express = require('express');
const router = express.Router();

// Retrieve all blogs
router.get('/blogs', (req, res) => {
  res.json({ blogs });
});

module.exports = router;
