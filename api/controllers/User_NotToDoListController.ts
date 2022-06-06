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
    const line: Array<User_NotToDoList>=await UserHasListService.getAllUserHasList();
    res.status(201).json(line);
}

export async function createNote(req: Request, res: Response){
    console.log(req.body);
    const line: User_NotToDoList= new User_NotToDoList(req.body.idUser, req.body.idList, req.body.texto);
    const response : User_NotToDoList = await UserHasListService.insertUserHasList(line.idUser, line.not_to_do_list_idnot_to_do_list, line.texto);
    res.status(201).json(response);
}

export async function getAllUserNotes(req: Request, res: Response){
    console.log("get all line from user controller");
    const line:string = req.params.email;
    console.log(line);
    
    const users: Array<User> = await UserService.getIdByEmail(line)
    const user = users[0].idusuario || 0;
    const noteResponse: Array<User_NotToDoList>=await UserHasListService.getUserHasListByUserId(user);
    const categorys: Array<NotToDoList> = await NotToDoListService.getAllNotes();
    
    let response:Array<any> = [];

    categorys.map((e)=>{
        console.log("category text");
        
        console.log(e);
        
        // console.log(e.not_to_do_list_idnot_to_do_list);
        response.push(
            {
                title: e.nombre,
                content: noteResponse.filter(el=>{
                    console.log("user content input");
                    
                    console.log(el);
                    
                    if(el.not_to_do_list_idnot_to_do_list==e.idnot_to_do_list){
                        return el.texto
                    }
                }).map(e=>e.texto)
            }
        )
    })
    console.log("response not to do list");
    
    console.log(response);
    
    
    res.status(200).json(response);
}