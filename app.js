const path = require("path");
const express = require("express");
const blogRoutes = require("./server/dist/routes/blogRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "./build")));
app.use(express.json());

app.use("/api/v1/blog/posts", blogRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

module.exports = app;
