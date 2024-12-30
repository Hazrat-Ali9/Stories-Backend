"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    likes: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "published", "rejected"]
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
const Blog = (0, mongoose_1.model)("Blog", schema);
exports.default = Blog;
