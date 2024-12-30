"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controller_1 = __importDefault(require("./blog.controller"));
const router = (0, express_1.Router)();
router.post("/", blog_controller_1.default.create);
router.post("/category", blog_controller_1.default.createCategory);
router.get("/", blog_controller_1.default.getAll);
router.get("/category", blog_controller_1.default.getAllCategory);
router.get("/:id", blog_controller_1.default.getById);
router.get('/tags/all', blog_controller_1.default.getTags);
router.put("/:id", blog_controller_1.default.update);
router.delete("/:id", blog_controller_1.default.deleteData);
router.delete("/category/:id", blog_controller_1.default.deletecategory);
exports.default = router;
