"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("./users.controller"));
const router = (0, express_1.Router)();
// create 
router.post("/", users_controller_1.default.create);
router.post("/subscribe", users_controller_1.default.subscribe);
// get all
router.get("/", users_controller_1.default.getAll);
// get by id
router.get("/:id", users_controller_1.default.getById);
// find one
router.get("/find/one", users_controller_1.default.findOne);
// update
router.put("/:id", users_controller_1.default.update);
// delete by id
router.delete("/:id", users_controller_1.default.deleteById);
exports.default = router;
