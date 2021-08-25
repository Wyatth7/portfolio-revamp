import mongoose from "mongoose";

interface ITimeLineModel extends mongoose.Document {
  year: string;
  title: string;
  description: string;
}

const timeLineModel = new mongoose.Schema({
  year: {
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

const TimeLineModel = mongoose.model<ITimeLineModel>(
  "TimeLineModel",
  timeLineModel
);
export default TimeLineModel;
