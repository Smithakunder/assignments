
const validateAuthorId = (req, res, next) => {
    const authorId = parseInt(req.params.authorId);
    if (!Number.isNaN(authorId)) {
      next();
    } else {
      res.status(400).json({ message: "Invalid author ID" });
    }
  };
  
  module.exports = { validateAuthorId };
  