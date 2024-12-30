"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./modules/router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '500mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '500mb' }));
// app.use(bodyParser.json())
dotenv_1.default.config();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const mongoDB = process.env.MONGODB_URI || ""; // Use your MongoDB connection string
mongoose_1.default.connect(mongoDB);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log("Successfully connected to MongoDB!");
});
// Routes
app.use("/api/v1", router_1.default);
// const apiCountSchema = new mongoose.Schema({
//     endpoint: { type: String, required: true },
//     count: { type: Number, default: 0 },
// });
// const ApiCount = mongoose.model('ApiCount', apiCountSchema);
// app.use(async (req, res, next) => {
//     const endpoint = req.path;
//     console.log(endpoint, "Path");
//     await ApiCount.findOneAndUpdate(
//         { endpoint },
//         { $inc: { count: 1 } },
//         { upsert: true, new: true }
//     );
//     next();
// });
exports.default = app;

// Server js
