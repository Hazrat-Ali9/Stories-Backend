import { model, Schema } from "mongoose"
import Blog from "./blog.model"

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export const Category = model("Category", categorySchema)

const create = async (data: any) => {
    try {
        const tags = data.tags;
        const newTags = tags.map((tag: string) => {
            if (tag.startsWith(" ")) {
                return tag.slice(1).toLowerCase();
            } else {
                return tag.toLowerCase();
            }
        });

        data.tags = newTags;
        const newBlog = new Blog(data);
        const result = await newBlog.save();
        return result;
    } catch (error) {
        throw error;
    }
};
const createCategory = async (data: any) => {
    try {
        const isExist = await Category.findOne({ name: data.name })
        if (isExist) {
            throw new Error("Category already exists")
        }
        const newdata = await new Category(data)
        const result = await newdata.save()
        return result
    } catch (error) {
        throw error
    }
}
const getAll = async (query: any) => {
    try {

        const page = parseInt(query.page) || 1
        const limit = parseInt(query.limit) || 10
        const skip = (page - 1) * limit
        const filter: any = {}
        query.category && (filter.category = query.category)

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
        ])
        if (query.user) {
            filter.user = query.user
            query.public && (filter.status = "published")
        }

        else {
            if (!query.status) {
                filter.status = "published"
            }
            else if (query.status === "all") {

            }
            else {
                filter.status = query.status
            }
        }
        if (query.random) {
            const result = await Blog.find({
                status: "published"
            })
                .limit(limit)
                .skip(skip)
                .populate("user", "name avatar")
                .select("-content")
            const randomData = result.sort(() => Math.random() - 0.5)
            return randomData
        }
        const result = await Blog.find(filter)
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .populate("user", "name avatar")
            .select("-content")

        if (query.sort) {
            const sort = result.sort((a: any, b: any) => b.count - a.count)
            return sort
        }
        return result

    } catch (error: any) {
        throw new Error(error)
    }
}
const getAllCategory = async (query: any) => {
    try {
        const page = parseInt(query.page) || 1
        const limit = parseInt(query.limit) || 10
        const skip = (page - 1) * limit
        const result = await Category.find()
            .sort({ createdAt: -1 })
        return result
    } catch (error) {
        throw error
    }
}

const getById = async (id: string) => {
    try {
        const result = await Blog.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
            .populate("user", "-password")
        return result
    } catch (error) {
        throw error
    }
}

const deleteData = async (id: string) => {
    try {
        const result = await Blog.findByIdAndDelete(id)
        return result
    } catch (error) {
        throw error
    }
}

const deletecategory = async (id: string) => {
    try {
        const result = await Category.findByIdAndDelete(id)
        return result
    } catch (error) {
        throw error
    }
}
const getTags = async (query: any) => {
    try {
        const result = await Blog.aggregate([
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
        ])
        const sort = result.sort((a: any, b: any) => b.count - a.count)

        return sort
    } catch (error) {
        throw error
    }
}
const update = async (id: string, data: any) => {
    try {
        const result = await Blog.findByIdAndUpdate(id, data, { new: true })
        return result
    } catch (error) {
        throw error
    }
}
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
}

export default blogService