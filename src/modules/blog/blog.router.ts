import { Router } from "express";
import blogController from "./blog.controller";

const router = Router()

router.post("/", blogController.create)
router.post("/category", blogController.createCategory)

router.get("/", blogController.getAll)
router.get("/category", blogController.getAllCategory)

router.get("/:id", blogController.getById)

router.get('/tags/all', blogController.getTags)

router.put("/:id", blogController.update)

router.delete("/:id", blogController.deleteData)
router.delete("/category/:id", blogController.deletecategory)

export default router
