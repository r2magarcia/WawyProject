import { Request, Response, response } from "express"
import listService from "../services/NotToDoListService";
import UserHasListService from "../services/User_NotToDoListService";
import UserService from "../services/UserService";
import NotToDoList from "../models/NotToDoListModel";
import User from "../models/UserModel";
import User_NotToDoList from "../models/User_NotToDoListModel";

export async function getAllNotes(req: Request, res: Response){
    const notes: Array<NotToDoList>=await listService.getAllNotes();
    res.status(201).json(notes);
}

export async function createNote(req: Request, res: Response){
    console.log(req.body);
    try {
        const _ = await listService.insertNote(req.body.contenido, req.body.categoria, req.body.nombre);
        res.status(201).json();
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "Algo salio mal"});
    }
}

export async function getAllUserNotes(req: Request, res: Response){
    console.log("get all line from user controller");
    const line:string = req.params.email;
    console.log(line);
    
    const users: Array<User> = await UserService.getIdByEmail(line)
    const user = users[0].idusuario || 0;
    const categorys: Array<NotToDoList>=await listService.getById(user);
    const noteResponse: Array<User_NotToDoList> = await UserHasListService.getAllUserHasList();
    
    let response:Array<any> = [];

    categorys.map((e)=>{
        console.log("category text");
        
        console.log(e);
        
        // console.log(e.not_to_do_list_idnot_to_do_list);
        response.push(
            {
                title: e.nombre,
                content: noteResponse.filter(el=>{
                    if(el.id==e.idnot_to_do_list){
                        return el.nombre
                    }
                }).map(e=>e.nombre)
            }
        )
    })
    console.log("response not to do list");
    
    console.log(response);
    
    
    res.status(200).json(response);
}