import { Request, Response, response } from "express";
import JournalService from "../services/JournalService";
import Journal from "../models/JournalModel";
import UserService from "../services/UserService";

export async function insertEntry(req: Request, res: Response) {
  console.log();

  const usuario = UserService.getIdByEmail(req.body.email);
  console.log(usuario);
  
  
  // const resp : any= await JournalService.insertEntry(
  //   req.body.notas,
  //   usuario,
  //   req.body.seguimientoDiario,
  //   req.body.proyectoSemanal,
  //   req.body.fecha
  // );
  res.status(201).json(response);
}

export function getEntries(req: Request, res: Response) {
  throw new Error("Function not implemented.");
}
