"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const blog_model_1 = __importDefault(require("./blog.model"));
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.Category = (0, mongoose_1.model)("Category", categorySchema);
const create = async (data) => {
    try {
        const tags = data.tags;
        const newTags = tags.map((tag) => {
            if (tag.startsWith(" ")) {
                return tag.slice(1).toLowerCase();
            }
            else {
                return tag.toLowerCase();
            }
        });
        data.tags = newTags;
        const newBlog = new blog_model_1.default(data);
        const result = await newBlog.save();
        return result;
    }
    catch (error) {
        throw error;
    }
};
const createCategory = async (data) => {
    try {
        const isExist = await exports.Category.findOne({ name: data.name });
        if (isExist) {
            throw new Error("Category already exists");
        }
        const newdata = await new exports.Category(data);
        const result = await newdata.save();
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getAll = async (query) => {
    try {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = {};
        query.category && (filter.category = query.category);
        query.filter && (filter.$or = [
            {
                title: { $regex: query.filter, $options: "i" }
            },
            {
                tags: { $regex: query.filter, $options: "i" }
            },
            {
                category: { $regex: query.filter, $options: "i" }
            }
        ]);
        if (query.user) {
            filter.user = query.user;
        }
        else {
            if (!query.status) {
                filter.status = "published";
            }
            else if (query.status === "all") {
            }
            else {
                filter.status = query.status;
            }
        }
        if (query.random) {
            const result = await blog_model_1.default.find({
                status: "published"
            })
                .limit(limit)
                .skip(skip)
                .populate("user", "name avatar")
                .select("-content");
            const randomData = result.sort(() => Math.random() - 0.5);
            return randomData;
        }
        const result = await blog_model_1.default.find(filter)
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .populate("user", "name avatar")
            .select("-content");
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getAllCategory = async (query) => {
    try {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const skip = (page - 1) * limit;
        const result = await exports.Category.find()
            .sort({ createdAt: -1 });
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getById = async (id) => {
    try {
        const result = await blog_model_1.default.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
            .populate("user", "-password");
        return result;
    }
    catch (error) {
        throw error;
    }
};
const deleteData = async (id) => {
    try {
        const result = await blog_model_1.default.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw error;
    }
};
const deletecategory = async (id) => {
    try {
        const result = await exports.Category.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getTags = async (query) => {
    try {
        const result = await blog_model_1.default.aggregate([
            {
                $unwind: "$tags"
            },
            {
                $group: {
                    _id: "$tags",
                    count: { $sum: 1 }
                }
            },
            {
                $sort: {
                    count: -1
                }
            }
        ]);
        const sort = result.sort((a, b) => b.count - a.count);
        return sort;
    }
    catch (error) {
        throw error;
    }
};
const update = async (id, data) => {
    try {
        const result = await blog_model_1.default.findByIdAndUpdate(id, data, { new: true });
        return result;
    }
    catch (error) {
        throw error;
    }
};
const blogService = {
    create,
    getAll,
    getById,
    createCategory,
    getAllCategory,
    deleteData,
    deletecategory,
    update,
    getTags
};
exports.default = blogService;
