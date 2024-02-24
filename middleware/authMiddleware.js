// middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
  // Authentication logic here
  // For simplicity, let's assume there's no authentication required for now
  next();
};

module.exports = authMiddleware;

  