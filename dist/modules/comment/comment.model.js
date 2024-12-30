"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    reply: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Blog"
    },
    likes: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});
const Comment = (0, mongoose_1.model)("Comment", schema);
exports.default = Comment;
