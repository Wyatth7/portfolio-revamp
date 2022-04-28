import { RequestHandler } from "express";
import PageTextModel from "./models/PageTextModel";

export const createPageText: RequestHandler = async (req, res, next) => {
  try {
    const bodyData = {
      page: req.body.page,
      pageTitle: req.body.pageTitle,
      pageText: req.body.pageText,
    };

    const createdPageText = await PageTextModel.create(bodyData);

    res.status(200).json({
      status: "success",
      data: createPageText,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not create page text.",
    });
  }
};
