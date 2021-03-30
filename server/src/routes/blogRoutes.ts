import express from "express";
import * as blogController from "./../controllers/blogController";

const router = express.Router();

router
  .route("/")
  .post(blogController.createPost)
  .get(blogController.sendPostSelectData);
router.route("/:id").get(blogController.getPost);
router.route("/query/:query").get(blogController.getPostWithQuery);

export default router;
