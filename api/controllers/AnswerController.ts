import { Request, Response, response } from "express"
import AnswerService from "../services/AnswerService";
import Answer from "../models/AnswerModel";

export async function getAllNotes(req: Request, res: Response){

    const response: Array<Answer>=await AnswerService.getAllAnswers();
    res.status(201).json(response);
}

export async function createNote(req: Request, res: Response){
    const ans: Answer= new Answer(req.body.pregunta, req.body.respuesta, req.body.fecha, req.body.idUser);
    const response : Answer = await AnswerService.insertAnswer(ans.pregunta, ans.respuesta, ans.fecha, ans.idUser);
    res.status(201).json(response);
}

export async function filterAnswerByUser(req: Request, res: Response){
    console.log('filterAnswerByUser');
    console.log(req.params.id);
    
    const response : Answer = await AnswerService.getChatResponsesByUser(req.params.id);
    console.log(response);
    
    res.status(201).json(response);
}