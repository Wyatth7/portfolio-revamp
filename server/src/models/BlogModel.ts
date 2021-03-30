import mongoose from "mongoose";

interface IBlogModel extends mongoose.Document {
  blogTitle: string;
  author: string;
  dateAdded: string;
  views: number;
  image: string;
  textBody: string;
  description: string;
}

const blogModel = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  textBody: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const BlogModel = mongoose.model<IBlogModel>("BlogModel", blogModel);

export default BlogModel;
