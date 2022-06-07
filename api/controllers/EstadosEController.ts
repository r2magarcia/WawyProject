import { Request, Response, response } from "express"
import EstadosService from "../services/EstadosEService";
import Estado from "../models/EstadosE";

export async function getAllEstados(req: Request, res: Response){
    console.log("get all state controller");
    const state: Array<Estado>=await EstadosService.getAllEstados();
    res.status(201).json(state);
}

export async function insertEstado(req: Request, res: Response){
    const state: Estado= new Estado(req.body.texto, req.body.color);
    const response : Estado = await EstadosService.insertEstado(state.texto, state.color);
    res.status(201).json(response);
}