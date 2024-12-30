import express, {
    Application,
    Request,
    Response
} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import rootRouter from './modules/router'
const app: Application = express()

app.use(cors())
app.use(express.json({ limit: '500mb' }))
app.use(express.urlencoded({ extended: true, limit: '500mb' }))
// app.use(bodyParser.json())
dotenv.config()

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

const mongoDB: string = process.env.MONGODB_URI || ""; // Use your MongoDB connection string

mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log("Successfully connected to MongoDB!");
});


// Routes
app.use("/api/v1", rootRouter)


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



export default app
