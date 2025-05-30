import { Router } from "express";
import usersController from "./users.controller";
// user route
const router = Router()

// create 

router.post("/", usersController.create)
router.post("/subscribe", usersController.subscribe)

// get all

router.get("/", usersController.getAll)

// login

router.post("/login", usersController.login)

// get by id

router.get("/:id", usersController.getById)

// find one

router.get("/find/one", usersController.findOne)

// update

router.put("/:id", usersController.update)

// delete by id

router.delete("/:id", usersController.deleteById)


export default router