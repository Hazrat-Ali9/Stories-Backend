import { model, Schema } from "mongoose";

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
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
})

const Blog = model("Blog", schema)

export default Blog