import Comment from "./comment.model"

const createNew = async (data: any) => {
    try {
        const newdata = await new Comment(data)
        const result = await newdata.save()

        return result
    } catch (error) {
        throw error
    }
}
const createReply = async (data: any) => {
    try {
        const newdata = await new Comment(data)
        const result = await newdata.save()
        await Comment.findByIdAndUpdate(
            data.commentId,
            { $push: { reply: result._id } },
            { new: true }
        );
        return result
    } catch (error) {
        throw error
    }
}

const getComments = async (query: any) => {
    try {
        const page = parseInt(query.page) || 1
        const limit = parseInt(query.limit) || 10
        const skip = (page - 1) * limit
        const result = await Comment.find({
            type: "comment"
        })
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .populate({
                path: "reply",
                populate: {
                    path: "user",
                    select: "name avatar",
                }
            })
            .populate('user', 'name avatar')
            .populate('post', "title image")
        return result
    } catch (error) {
        throw error
    }
}

const getAll = async (id: string) => {
    try {
        const result = await Comment.find({ post: id, type: "comment" })
            .populate('user', 'name avatar')
            .populate({
                path: "reply",
                populate: {
                    path: "user",
                    select: "name avatar",
                }
            })
        return result
    } catch (error) {
        throw error
    }
}

const getCommentByPostId = async (id: string) => {
    try {
        const result = await Comment.find({ post: id, type: "comment" })
            .populate('user', 'name avatar')
            .populate({
                path: "reply",
                populate: {
                    path: "user",
                    select: "name avatar",
                }
            })
        return result
    } catch (error) {
        throw error
    }
}

const getCommentById = async (id: string) => {
    try {
        const result = await Comment.findById(id)
            .populate('user', 'name avatar')
            .populate({
                path: "reply",
                populate: {
                    path: "user",
                    select: "name avatar",
                }
            })
        return result
    } catch (error) {
        throw error
    }
}


export default {
    createNew,
    getAll,
    getCommentByPostId,
    getCommentById,
    getComments,
    createReply
}