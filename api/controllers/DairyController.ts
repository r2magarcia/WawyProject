import { Request, Response, response } from "express";
import DiaryService from "../services/DiaryService";
import EstadosService from "../services/EstadosEService";
import UserService from "../services/UserService";
import Dairy from "../models/DiaryModel";
import EstadoE from "../models/EstadosE";
import User from "../models/UserModel";

export async function getAllNotes(req: Request, res: Response) {
  console.log("get all book controller");
  const book: Array<Dairy> = await DiaryService.getAllDiarys();
  res.status(201).json(book);
}

export async function createNote(req: Request, res: Response) {
  try {
    const book: Dairy = new Dairy(
      req.body.fecha,
      req.body.idEmocion,
      req.body.email
    );
    const response: Dairy = await DiaryService.insertDiary(
      book.fecha,
      book.estados_emocionales_idemocion,
      req.body.email
    );
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Algo salio mal" });
  }
}

//TODO: hacer esto menos feo
export async function getDiarySorted(req: Request, res: Response) {
  try {
    const response: Dairy = await DiaryService.getDiarySortedByEmail(
      req.params.email
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Algo salio mal" });
  }
}
