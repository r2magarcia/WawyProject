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
    const book: Dairy= new Dairy(req.body.fecha, req.body.idEmocion, req.body.email);
    const response : Dairy = await DiaryService.insertDiary(book.fecha, book.estados_emocionales_idemocion,  req.body.email);
    res.status(201).json(response);
}


//TODO: hacer esto menos feo
export async function getDiarySorted(req: Request, res: Response){
    console.log("get all book controller sorted");
    const line:string = req.params.email;
    const users: Array<User> = await UserService.getIdByEmail(line)
    console.log(users);
    let user:number;
    let book: Array<Dairy>;
    try {
        user = users[0].idusuario || 0;
        book = await DiaryService.getDiarySorted(user);
    } catch (error) {
        //throw new Error("Bad request");
        console.log("something failed");
        
    }
   
    const status:Array<EstadoE> = await EstadosService.getAllEstados();

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
    
    res.status(200).json(response);
}