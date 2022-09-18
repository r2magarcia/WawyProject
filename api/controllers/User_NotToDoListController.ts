import { Request, Response, response } from "express"
import UserHasListService from "../services/User_NotToDoListService";
import User_NotToDoList from "../models/User_NotToDoListModel";
import UserService from "../services/UserService";
import User from "../models/UserModel";
import EstadoE from "../models/EstadosE";
import NotToDoList from "../models/NotToDoListModel";
import NotToDoListService from "../services/NotToDoListService";


export async function getAllNotes(req: Request, res: Response){
    console.log("get all line controller");
    //const line: Array<User_NotToDoList>=await UserHasListService.getAllUserHasList();
    res.status(201).json();
}

export async function createNote(req: Request, res: Response){
    console.log(req.body);
    //const line: User_NotToDoList= new User_NotToDoList(req.body.id, req.body.nombre);
    //const response : User_NotToDoList = await UserHasListService.insertUserHasList(line.nombre);
    res.status(201).json();
}