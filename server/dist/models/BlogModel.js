"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const blogModel = new mongoose_1.default.Schema({
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
const BlogModel = mongoose_1.default.model("BlogModel", blogModel);
exports.default = BlogModel;
