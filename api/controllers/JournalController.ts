import { Request, Response, response } from "express"
import JournalService from "../services/JournalService"
import Journal from "../models/JournalModel";

export async function insertEntry(req: Request, res: Response){
    // const state: Estado= new Estado(req.body.texto, req.body.color);
    // const response : Estado = await EstadosService.insertEstado(state.texto, state.color);
    const journal: Journal = new Journal(req.params.notas, req.params.idUsuario, req.params.seguimientoDiario, req.params.proyectoSemanal, req.params.fecha);
    const resp: Array<Journal>=await JournalService.insertEntry(journal.notas, journal.idUsuario, journal.seguimientoDiario, journal.proyectoSemanal, journal.fecha);
    res.status(201).json(response);
}