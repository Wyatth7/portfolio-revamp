"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostWithQuery = exports.sendPostSelectData = exports.getPost = exports.createPost = void 0;
const errHandler_1 = __importDefault(require("../utils/errHandler"));
const BlogModel_1 = __importDefault(require("./../models/BlogModel"));
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const reqData = req.body;
    try {
        yield BlogModel_1.default.create({
            blogTitle: reqData.blogTitle.toLowerCase(),
            author: reqData.author.toLowerCase(),
            dateAdded: reqData.dateAdded,
            views: 0,
            image: reqData.image,
            textBody: reqData.textBody,
            description: reqData.description,
        });
        res.status(201).json({ message: "Post created." });
    }
    catch (err) {
        console.log(err);
        errHandler_1.default(res, 401, "Could not create post.");
    }
});
exports.createPost = createPost;
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orig = yield BlogModel_1.default.findById(req.params.id);
        if (!orig) {
            return errHandler_1.default(res, 400, "Could not get post.");
        }
        const post = yield BlogModel_1.default.findByIdAndUpdate(req.params.id, {
            views: (orig === null || orig === void 0 ? void 0 : orig.views) + 1,
        });
        res.status(200).json({
            post,
        });
    }
    catch (err) {
        console.log(err);
        return errHandler_1.default(res, 400, "Could not get post.");
    }
});
exports.getPost = getPost;
const sendPostSelectData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield BlogModel_1.default.find().select([
            "-textBody",
            "-dateAdded",
            "-image",
            "-author",
            "-__v",
        ]);
        res.status(200).json({
            posts,
        });
    }
    catch (err) {
        console.log(err);
        return errHandler_1.default(res, 400, "Could not get posts.");
    }
});
exports.sendPostSelectData = sendPostSelectData;
const getPostWithQuery = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield BlogModel_1.default.find({
            blogTitle: { $regex: req.params.query.toLowerCase() },
        });
        if (!posts) {
            return errHandler_1.default(res, 400, "Could not find any posts with that name.");
        }
        res.status(200).json({
            posts,
        });
    }
    catch (err) {
        console.log(err);
        errHandler_1.default(res, 400, "Could not find posts.");
    }
});
exports.getPostWithQuery = getPostWithQuery;
