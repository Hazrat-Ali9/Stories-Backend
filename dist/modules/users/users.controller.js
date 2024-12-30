"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("./users.service"));
const create = async (req, res) => {
    try {
        const data = req.body;
        const result = await users_service_1.default.create(data);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const subscribe = async (req, res) => {
    try {
        const data = req.body;
        const result = await users_service_1.default.subscribe(data);
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
        const result = await users_service_1.default.getAll(req.query);
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
        const result = await users_service_1.default.getById(req.params.id);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const findOne = async (req, res) => {
    try {
        const result = await users_service_1.default.findOne(req.query);
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
        const result = await users_service_1.default.update(req.params.id, req.body);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};
const deleteById = async (req, res) => {
    try {
        const result = await users_service_1.default.deleteById(req.params.id);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
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
