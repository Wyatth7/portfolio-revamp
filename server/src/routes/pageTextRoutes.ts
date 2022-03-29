import express from "express";
import * as pageTextController from "../controllers/pageTextController";

const router = express.Router();

router
  .post("/createPageText", pageTextController.createPageText)
  .get("/getPageText", pageTextController.getPageText);

export default router;
