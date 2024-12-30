"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_service_1 = __importDefault(require("./blog.service"));
const create = async (req, res) => {
    try {
        const data = req.body;
        const result = await blog_service_1.default.create(data);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const getAll = async (req, res) => {
    try {
        const result = await blog_service_1.default.getAll(req.query);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const getAllCategory = async (req, res) => {
    try {
        const result = await blog_service_1.default.getAllCategory(req.query);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const getById = async (req, res) => {
    try {
        const result = await blog_service_1.default.getById(req.params.id);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const result = await blog_service_1.default.createCategory(data);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const deleteData = async (req, res) => {
    try {
        const result = await blog_service_1.default.deleteData(req.params.id);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const deletecategory = async (req, res) => {
    try {
        const result = await blog_service_1.default.deletecategory(req.params.id);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const update = async (req, res) => {
    try {
        const result = await blog_service_1.default.update(req.params.id, req.body);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const getTags = async (req, res) => {
    try {
        const result = await blog_service_1.default.getTags(req.params);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const blogController = {
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
exports.default = blogController;
