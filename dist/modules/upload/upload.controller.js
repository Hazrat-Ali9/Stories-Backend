"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.Router)();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
cloudinary_1.v2.config({
    cloud_name: "djck34rtp",
    api_key: "215571838744392",
    api_secret: "bxkJlnOpVx1it5S1HO4LG-IbZtI",
});
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const uploadStream = cloudinary_1.v2.uploader.upload_stream({
            folder: 'Blog Site',
        }, (error, result) => {
            if (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error uploading image',
                    error: error,
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Image uploaded successfully!',
                    url: result.secure_url,
                });
            }
        });
        uploadStream.end(req.file?.buffer);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
});
router.get('/all', async (req, res) => {
    try {
        const result = await cloudinary_1.v2.api.resources({
            type: 'upload',
            resource_type: 'image',
        });
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
});
router.put('/delete', async (req, res) => {
    try {
        const result = await cloudinary_1.v2.uploader.destroy(req.body.public_id);
        res.send(result);
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
});
exports.default = router;
