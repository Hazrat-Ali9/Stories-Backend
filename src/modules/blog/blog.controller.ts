import { Request, Response } from "express";
import blogService from "./blog.service";

const create = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await blogService.create(data)
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
        const result = await blogService.getAll(req.query)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const getAllCategory = async (req: Request, res: Response) => {
    try {
        const result = await blogService.getAllCategory(req.query)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const getById = async (req: Request, res: Response) => {
    try {
        const result = await blogService.getById(req.params.id)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const createCategory = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await blogService.createCategory(data)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const deleteData = async (req: Request, res: Response) => {
    try {
        const result = await blogService.deleteData(req.params.id)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const deletecategory = async (req: Request, res: Response) => {
    try {
        const result = await blogService.deletecategory(req.params.id)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const update = async (req: Request, res: Response) => {
    try {
        const result = await blogService.update(req.params.id, req.body)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const getTags = async (req: Request, res: Response) => {
    try {
        const result = await blogService.getTags(req.params)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const blogController = {
    create,
    getAll,
    getById,
    createCategory,
    getAllCategory,
    deleteData,
    deletecategory,
    update,
    getTags
}

export default blogController