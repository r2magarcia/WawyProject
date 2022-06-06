import { Request, Response, response } from "express"
import DiaryService from "../services/DiaryService";
import EstadosService from "../services/EstadosEService";
import UserService from "../services/UserService";
import Dairy from "../models/DiaryModel";
import EstadoE from "../models/EstadosE";
import User from "../models/UserModel";


export async function getAllNotes(req: Request, res: Response){
    console.log("get all book controller");
    const book: Array<Dairy>=await DiaryService.getAllDiarys();
    res.status(201).json(book);
}

export async function createNote(req: Request, res: Response){
    console.log(req.body);
    const book: Dairy= new Dairy(req.body.fecha, req.body.estados_emocionales_idmocion, req.body.usuarios_idusuario);
    const response : Dairy = await DiaryService.insertDiary(book.fecha, book.estados_emocionales_idemocion, book.usuarios_idusuario);
    res.status(201).json(response);
}

export async function getDiarySorted(req: Request, res: Response){
    console.log("get all book controller sorted");
    const line:string = req.body.email;
    const users: Array<User> = await UserService.getIdByEmail(line)
    console.log(users);
    let user:number;
    try {
        user = users[0].idusuario || 0;
    } catch (error) {
        throw new Error("Bad request");
    }
    let book: Array<Dairy>;
    const status:Array<EstadoE> = await EstadosService.getAllEstados();
    try {
        book = await DiaryService.getDiarySorted(user);
    } catch (error) {
        throw new Error("Bad request");
    }
    

    let response: Array<any> = [];

    status.map((e)=>{

        response.push({
            date: book.filter(el=>{

                if(el.estados_emocionales_idemocion==e.idemocion){
                    return el.fecha;
                }
            }).map(e=>e.fecha)[0],
            emotion:e.texto,
            color:e.color
        })
    })
    // console.log(book);
    
    res.status(201).json(response);
}