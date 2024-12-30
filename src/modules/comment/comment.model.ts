import { model, Schema } from "mongoose";

const schema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    type: {
        type: String,
        enum: ["comment", "reply"],
        default: "comment"
    },
    commentId: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    reply: {
        type: [Schema.Types.ObjectId],
        ref: "Comment"
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Blog"
    },
    likes: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

const Comment = model("Comment", schema)

export default Comment