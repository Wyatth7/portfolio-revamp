import { RequestHandler } from "express";
import PageTextModel, { IPageTextModel } from "../models/PageTextModel";
import sendRes from "../utils/errHandler";

export const createPageText: RequestHandler = async (req, res, next) => {
  try {
    const bodyData = {
      page: req.body.page,
      pageTitle: req.body.pageTitle,
      pageText: req.body.pageText,
    };

    const createdPageText: IPageTextModel = await PageTextModel.create(
      bodyData
    );

    res.status(200).json({
      status: "success",
      data: {
        page: createdPageText.page,
        pageTitle: createdPageText.pageTitle,
        pageText: createdPageText.pageText,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not create page text.",
    });
  }
};

export const getPageText: RequestHandler = async (req, res, next) => {
  try {
    const queryString = req.query.page as string;

    if (typeof queryString !== "string") {
      return sendRes(res, 400, "Page must be a string");
    }

    const pageText = await PageTextModel.findOne({ page: queryString });

    res.status(200).json({
      status: "success",
      data: pageText,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Could not get page text.",
    });
  }
};
