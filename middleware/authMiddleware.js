// middleware/authMiddleware.js
const authorize = (req, res, next) => {
    // Authentication logic here
    // Check if the author is logged in
    // For simplicity, let's assume there's some authentication mechanism
    // You can replace this with your actual authentication logic
    const isLoggedIn = true; // Example
    if (isLoggedIn) {
      next(); // Continue to the next middleware
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
  
  module.exports = { authorize };
  