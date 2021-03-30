import { Response } from "express";

export const sendRes = (res: Response, code: number, message: string) => {
  return res.status(code).json({ message });
};

export default sendRes;
