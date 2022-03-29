const path = require("path");
const express = require("express");
const blogRoutes = require("./server/dist/routes/blogRoutes");
const projectRoutes = require("./server/dist/routes/project");
const headerRoutes = require("./server/dist/routes/HeaderRoutes");
const timlineRoutes = require("./server/dist/routes/timelineRoutes");
const pageTextRoutes = require("./server/dist/routes/pageTextRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "./build")));
app.use(express.json());

app.use("/api/v1/blog/posts", blogRoutes);
app.use("/api/v1/github", projectRoutes);
app.use("/api/v1/headers", headerRoutes);
app.use("/api/v1/timeline", timlineRoutes);
app.use("/api/v1/pageText", pageTextRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

module.exports = app;
