// routes/authorRoutes.js
const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/authMiddleware");

// Login endpoint
router.post("/login", authorize, (req, res) => {
  // Login logic here
  res.json({ message: "Logged in successfully" });
});

// Register endpoint
router.post("/register", (req, res) => {
  // Registration logic here
  res.json({ message: "Registered successfully" });
});

module.exports = router;
