"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_model_1 = __importDefault(require("./comment.model"));
const createNew = async (data) => {
    try {
        const newdata = await new comment_model_1.default(data);
        const result = await newdata.save();
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getAll = async (id) => {
    try {
        const result = await comment_model_1.default.find({ post: id })
            .populate("reply");
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getCommentByPostId = async (id) => {
    try {
        const result = await comment_model_1.default.find({ post: id })
            .populate("reply");
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getCommentById = async (id) => {
    try {
        const result = await comment_model_1.default.findById(id)
            .populate("reply");
        return result;
    }
    catch (error) {
        throw error;
    }
};
exports.default = {
    createNew,
    getAll,
    getCommentByPostId,
    getCommentById
};
