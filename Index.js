// index.js
const express = require("express");
const bodyParser = require("body-parser");
const authorRoutes = require("./routes/authorRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/authors", authorRoutes);
app.use("/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
