import mongoose from "mongoose";

interface IHeaderModel extends mongoose.Document {
  page: string;
  header: string;
  text: string;
}

const headerModel = new mongoose.Schema({
  page: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const HeaderModel = mongoose.model<IHeaderModel>("HeaderModel", headerModel);
export default HeaderModel;
