import { Request, Response, response } from "express"
import listService from "../services/NotToDoListService";
import NotToDoList from "../models/NotToDoListModel";

export async function getAllNotes(req: Request, res: Response){
    console.log("get all pilots controller");
    const pilots: Array<NotToDoList>=await listService.getAllNotes();
    res.status(201).json(pilots);
}

export async function createNote(req: Request, res: Response){
    console.log(req.body);
    const Nota: NotToDoList= new NotToDoList(req.body.nombre);
    const response : NotToDoList = await listService.insertNote(Nota.nombre);
    res.status(201).json(response);
}