import User, { Subscribe } from "./users.model"

const create = async (data: any) => {
    try {
        const isExist = await User.findOne({ email: data.email })
            .select("-password")

        if (isExist && isExist.socialLogin) {
            await User.findByIdAndUpdate(isExist._id, data, { new: true })
            return isExist
        }
        else {
            if (isExist) {
                throw new Error("User already exists")
            }
        }
        const newdata = await new User(data)
        const result = await newdata.save()
        return result
    } catch (error) {
        throw error
    }
}

const loginUser = async (data: any) => {
    try {
        const result = await User.findOne({ email: data.email })
        const password = data.password
        if (!result) {
            throw new Error("User not found")
        }
        if (result.password !== password) {
            throw new Error("Invalid password")
        }
        return result
    } catch (error) {
        throw error
    }
}
const subscribe = async (data: any) => {
    try {
        const isExist = await Subscribe.findOne({ email: data.email })
        if (isExist) {
            throw new Error("You are already subscribed to our newsletter")
        }
        const newdata = await new Subscribe(data)
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
        const result = await User.find()
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
        return result
    } catch (error) {
        throw error
    }
}
const getById = async (id: string) => {
    try {
        const result = await User.findById(id)
        return result
    } catch (error) {
        throw error
    }
}

const findOne = async (query: any) => {
    try {
        const result = await User.findOne({
            $or: [
                { email: query.email },
                { name: query.email }
            ]
        })
        return result
    } catch (error) {
        throw error
    }
}

const update = async (id: string, data: any) => {
    try {
        const result = await User.findByIdAndUpdate(id, data, { new: true })
        return result
    } catch (error) {
        throw error
    }
}

const deleteById = async (id: string) => {
    try {
        const result = await User.findByIdAndDelete(id)
        return result
    } catch (error) {
        throw error
    }
}

export default {
    create,
    getAll,
    getById,
    findOne,
    update,
    subscribe,
    deleteById,
    loginUser
}