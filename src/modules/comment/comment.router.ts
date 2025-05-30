import { Router } from "express";
import commntController from "./comment.controller";
const router = Router()
// Comment Router
router.post("/", commntController.createNew)
router.post("/reply", commntController.createReply)
router.get("/", commntController.getComments)
router.get("/post/:id", commntController.getAll)
router.get("/:id", commntController.getCommentById)



export default router