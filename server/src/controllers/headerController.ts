import { RequestHandler, Request, Response, NextFunction } from "express";
import sendRes from "../utils/errHandler";
import HeaderModel, { IHeaderModel } from "./../models/HeaderModel";

export const createHeader = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bodyData = req.body;

  try {
    const newBlog = await HeaderModel.create({
      page: bodyData.page,
      title: bodyData.title,
      text: bodyData.text,
    });

    res.status(200).json({
      message: "success",
      data: newBlog,
    });
  } catch (err) {
    console.log(err);
    sendRes(res, 400, "Could not create header.");
  }
};

export const getHeader = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const header = await HeaderModel.findOne({ page: req.query.page });

    // console.log(req.query.page);

    res.status(200).json({
      status: "Success",
      // data: header,
    });
  } catch (err) {
    sendRes(res, 400, "Could not get header data.");
  }
};

export const updateHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
