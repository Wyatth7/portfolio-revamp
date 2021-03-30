import { RequestHandler } from "express";
import sendRes from "../utils/errHandler";
import BlogModel from "./../models/BlogModel";

export const createPost: RequestHandler = async (req, res, next) => {
  const reqData = req.body;

  try {
    await BlogModel.create({
      blogTitle: reqData.blogTitle.toLowerCase(),
      author: reqData.author.toLowerCase(),
      dateAdded: reqData.dateAdded,
      views: 0,
      image: reqData.image,
      textBody: reqData.textBody,
      description: reqData.description,
    });

    res.status(201).json({ message: "Post created." });
  } catch (err) {
    console.log(err);
    sendRes(res, 401, "Could not create post.");
  }
};

export const getPost: RequestHandler = async (req, res, next) => {
  try {
    const orig = await BlogModel.findById(req.params.id);
    if (!orig) {
      return sendRes(res, 400, "Could not get post.");
    }

    const post = await BlogModel.findByIdAndUpdate(req.params.id, {
      views: orig?.views + 1,
    });

    res.status(200).json({
      post,
    });
  } catch (err) {
    console.log(err);
    return sendRes(res, 400, "Could not get post.");
  }
};

export const sendPostSelectData: RequestHandler = async (req, res, next) => {
  try {
    const posts = await BlogModel.find().select([
      "-textBody",
      "-dateAdded",
      "-image",
      "-author",
      "-__v",
    ]);

    res.status(200).json({
      posts,
    });
  } catch (err) {
    console.log(err);
    return sendRes(res, 400, "Could not get posts.");
  }
};

export const getPostWithQuery: RequestHandler = async (req, res, next) => {
  try {
    const posts = await BlogModel.find({
      blogTitle: { $regex: req.params.query.toLowerCase() },
    });

    if (!posts) {
      return sendRes(res, 400, "Could not find any posts with that name.");
    }

    res.status(200).json({
      posts,
    });
  } catch (err) {
    console.log(err);
    sendRes(res, 400, "Could not find posts.");
  }
};
