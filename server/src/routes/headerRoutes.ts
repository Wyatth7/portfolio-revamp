import express from "express";
import * as HeaderController from "../controllers/headerController";

const router = express.Router();

router.get("/getHeader", HeaderController.getHeader);
router.post("/createHeader", HeaderController.createHeader);
router.patch("/updateHeader", HeaderController.updateHeader);
router.delete("/deleteHeader", HeaderController.deleteHeader);

export default router;
