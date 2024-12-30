"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = __importStar(require("./users.model"));
const create = async (data) => {
    try {
        const isExist = await users_model_1.default.findOne({ email: data.email })
            .select("-password");
        if (isExist && isExist.socialLogin) {
            await users_model_1.default.findByIdAndUpdate(isExist._id, data, { new: true });
            return isExist;
        }
        else {
            if (isExist) {
                throw new Error("User already exists");
            }
        }
        const newdata = await new users_model_1.default(data);
        const result = await newdata.save();
        return result;
    }
    catch (error) {
        throw error;
    }
};
const subscribe = async (data) => {
    try {
        const isExist = await users_model_1.Subscribe.findOne({ email: data.email });
        if (isExist) {
            throw new Error("You are already subscribed to our newsletter");
        }
        const newdata = await new users_model_1.Subscribe(data);
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
        const result = await users_model_1.default.find()
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 });
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getById = async (id) => {
    try {
        const result = await users_model_1.default.findById(id);
        return result;
    }
    catch (error) {
        throw error;
    }
};
const findOne = async (query) => {
    try {
        const result = await users_model_1.default.findOne({
            $or: [
                { email: query.email },
                { name: query.email }
            ]
        });
        return result;
    }
    catch (error) {
        throw error;
    }
};
const update = async (id, data) => {
    try {
        const result = await users_model_1.default.findByIdAndUpdate(id, data, { new: true });
        return result;
    }
    catch (error) {
        throw error;
    }
};
const deleteById = async (id) => {
    try {
        const result = await users_model_1.default.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw error;
    }
};
exports.default = {
    create,
    getAll,
    getById,
    findOne,
    update,
    subscribe,
    deleteById
};
