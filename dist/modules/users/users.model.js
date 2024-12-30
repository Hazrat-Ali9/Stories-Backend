"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribe = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    socialLogin: {
        type: Boolean
    },
    about: {
        type: String,
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
        required: true
    },
    social: {
        type: Object
    },
    token: {
        type: String
    },
    role: {
        type: String,
        default: "user"
    }
}, {
    timestamps: true
});
const subscribeSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});
const User = (0, mongoose_1.model)('User', schema);
exports.Subscribe = (0, mongoose_1.model)('Subscribe', subscribeSchema);
exports.default = User;
