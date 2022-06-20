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
    const request = req.body;
    let response : Array<Dairy> = [];
    request.forEach(async(element:any) => {
        const users: Array<User> = await UserService.getIdByEmail(element.email);
        const user = users[0].idusuario || 0;
        const emotions: Array<EstadoE> = await EstadosService.getEstadoByNombre(element.emocion);
        const emotion = emotions[0].idemocion || 0;
        const book: Dairy = new Dairy(element.fecha, emotion, user);
        response.push(await DiaryService.insertDiary(book.fecha, book.estados_emocionales_idemocion, book.usuarios_idusuario));
    });
    res.status(201).json(response);
}

export async function getDiarySorted(req: Request, res: Response){
    console.log("get all book controller sorted");
    const line:string = req.params.email;
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
        console.log(book);
    } catch (error) {
        throw new Error("Bad request");
    }
    

    let response: Array<any> = [];

    book.map((e)=>{

        response.push({
            fecha:e.fecha,
            emotion: status.filter(el=>{

                if(el.idemocion==e.estados_emocionales_idemocion){
                    return el.texto;
                }
            })[0].texto,
            color:status.filter(el=>{

                if(el.idemocion==e.estados_emocionales_idemocion){
                    return el.color;
                }
            })[0].color,
        })
    })
    // console.log(book);
    
    res.status(200).json(response);
}