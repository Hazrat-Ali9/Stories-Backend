import { Request, Response } from "express";
import usersService from "./users.service";
// user controller
const create = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await usersService.create(data)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const login = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await usersService.loginUser(data)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}
const subscribe = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await usersService.subscribe(data)
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
        const result = await usersService.getAll(req.query)
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
        const result = await usersService.getById(req.params.id)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const findOne = async (req: Request, res: Response) => {
    try {
        const result = await usersService.findOne(req.query)
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
        const result = await usersService.update(req.params.id, req.body)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const deleteById = async (req: Request, res: Response) => {
    try {
        const result = await usersService.deleteById(req.params.id)
        res.send(result)
    } catch (error: any) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

export default {
    create,
    getAll,
    getById,
    findOne,
    update,
    subscribe,
    deleteById,
    login
}