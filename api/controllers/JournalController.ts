import { Request, Response, response } from "express";
import JournalService from "../services/JournalService";
import Journal from "../models/JournalModel";
import UserService from "../services/UserService";

export async function insertEntry(req: Request, res: Response) {
  console.log();

  const records: any = await JournalService.getEntries(req.body.email).then;
  console.log(records);
  
  if(records) {
    const resp : any= await JournalService.updateEntry(
      req.body.notas,
      req.body.user,
      req.body.seguimientoDiario,
      req.body.proyectoSemanal,
      req.body.fecha
    );
    res.status(201).json(resp);
  } else{
    const resp : any= await JournalService.createEntry(
      req.body.notas,
      req.body.user,
      req.body.seguimientoDiario,
      req.body.proyectoSemanal,
      req.body.fecha
    );
    res.status(201).json(resp);
  }

  
  

}

export async function getEntries(req: Request, res: Response) {
  console.log('getEntries');
  
  
  const resp = await JournalService.getEntries(req.params.email);
  console.log(resp);
  
  res.status(200).json(resp[0]);
}

export async function getEntryForUser(email: string) {
  console.log('getEntries');
  
  
  const resp = await JournalService.getEntries(email);
  return resp.length;
}
