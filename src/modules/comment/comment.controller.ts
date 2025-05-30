import { Request, Response } from "express"
import commentService from "./comment.service"
// comment controller
const createNew = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await commentService.createNew(data)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await commentService.getAll(req.params.id)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const getComments = async (req: Request, res: Response) => {
    try {
        const result = await commentService.getComments(req.query)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const createReply = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await commentService.createReply(data)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const getCommentById = async (req: Request, res: Response) => {
    try {
        const result = await commentService.getCommentById(req.params.id)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const commntController = {
    createNew,
    getAll,
    getComments,
    createReply,
    getCommentById
}
export default commntController

