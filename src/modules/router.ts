import { Router } from "express";

import userRouter from "./users/users.router";
import blogRouter from "./blog/blog.router";
import uploadRouter from "./upload/upload.controller";
import commentRouter from "./comment/comment.router";
const router = Router()

// user Router

router.use("/users", userRouter)
router.use("/blog", blogRouter)
router.use("/upload", uploadRouter)

router.use('/comment', commentRouter)

export default router