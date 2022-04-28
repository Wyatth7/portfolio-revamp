import express from "express";
import * as pageTextController from "../controllers/PageTextController";

const router = express.Router();

router
  .post("/createPageText", pageTextController.createPageText)
  .get("/getPageText", pageTextController.getPageText);

export default router;
