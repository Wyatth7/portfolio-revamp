import mongoose from "mongoose";

export interface IPageTextModel extends mongoose.Document {
  page: string;
  pageTitle: string;
  pageText: string;
}

const pageTextModel = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    unique: true,
  },
  pageTitle: {
    type: String,
    required: true,
  },
  pageText: {
    type: String,
    required: true,
  },
});

const PageTextModel = mongoose.model<IPageTextModel>(
  "PageTextModel",
  pageTextModel
);
export default PageTextModel;
