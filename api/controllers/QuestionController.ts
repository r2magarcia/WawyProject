import { Request, Response, response } from "express";
import  QuestionService  from "../services/QuestionService";

export async function getAllQuestions(req: Request, res: Response) {
    try {
      const notes: Array<any> = await QuestionService.getAllQuestions();
      res.status(201).json(notes);
      console.log(notes);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Algo salio mal" });
    }
  }