
const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/authMiddleware");


router.post("/login", authorize, (req, res) => {

  res.json({ message: "Logged in successfully" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Registered successfully" });
});

module.exports = router;
