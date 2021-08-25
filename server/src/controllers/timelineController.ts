import { RequestHandler } from "express";
import sendRes from "../utils/errHandler";
import TimeLineModel from "./../models/TimeLineModel";

export const createYear: RequestHandler = async (req, res, next) => {
  const bodyData = req.body;

  try {
    const year = await TimeLineModel.create({
      year: bodyData.year,
      title: bodyData.title,
      text: bodyData.text,
    });

    res.status(200).json({
      status: "success",
      data: year,
    });
  } catch (err) {
    sendRes(res, 400, "Could not create year.");
  }
};

export const getAllYears: RequestHandler = async (req, res, next) => {
  try {
    const years = await TimeLineModel.find();
    console.log(years);

    const arrays: object = {};

    years.forEach((el) => {
      if (arrays.hasOwnProperty(el.year)) {
        arrays[el.year].push(el);
      }
    });

    res.status(200).json({
      message: "success",
      data: years,
    });
  } catch (err) {
    sendRes(res, 400, "Could not get year data.");
  }
};
