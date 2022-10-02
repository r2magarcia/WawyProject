import { Request, Response, response } from "express";
import PreguntaService from "../services/PreguntaService";

export async function getAll(req: Request, res: Response) {

    const response = await PreguntaService.getAllPreguntas();


  res.status(201).json(response);
}
