import express from "express";
import * as project from "./../controllers/project";

const router = express.Router();

router.get("/repos", project.gitHubData);

export default router;
