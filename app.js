const express = require("express");
const blogRoutes = require("./server/dist/routes/blogRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/blog/posts", blogRoutes);

module.exports = app;
