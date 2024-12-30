"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_router_1 = __importDefault(require("./users/users.router"));
const blog_router_1 = __importDefault(require("./blog/blog.router"));
const upload_controller_1 = __importDefault(require("./upload/upload.controller"));
const router = (0, express_1.Router)();
// user Router
router.use("/users", users_router_1.default);
router.use("/blog", blog_router_1.default);
router.use("/upload", upload_controller_1.default);
exports.default = router;
