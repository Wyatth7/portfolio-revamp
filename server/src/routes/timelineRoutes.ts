import express from "express";
import * as TimelineController from "./../controllers/timelineController";

const router = express.Router();

router.post("/createYear", TimelineController.createYear);
router.get("/getAllYears", TimelineController.getAllYears);
// router.get('/getYear')
// router.patch('/updateYear')
// router.delete('/deleteYear')

export default router;
