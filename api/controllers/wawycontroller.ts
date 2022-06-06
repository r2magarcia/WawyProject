import { Request, Response, response } from "express"
import wawyServices from "../services/wawyservice";
import wawy from "../models/wawymodule";

export async function getAllPilots(req: Request, res: Response){
    console.log("get all pilots controller");
    const pilots: Array<wawy>=await wawyServices.getAllPilots();
    res.status(201).json(pilots);
}
/*
export async function CreatePilot(req: Request, res: Response){
    const pilot: Pilot= new Pilot(req.body.idPiloto, req.body.Nombre,req.body.Apodo,req.body.Podios,req.body.Victorias,req.body.idCarroFav,req.body.Equipo_idEquipo);
    const response : Pilot = await pilotServices.CreatePilot(pilot);
    res.status(201).json(pilot);
}

export async function update(req: Request, res: Response){
    const pilot: Pilot= new Pilot(req.body.idPiloto,req.body.Nombre,req.body.Apodo,req.body.Podios,req.body.Victorias,req.body.idCarroFav,req.body.Equipo_idEquipo);
    const response : Pilot = await pilotServices.update(pilot);
    res.status(201).json(pilot);
}

export async function del(req: Request, res: Response){
    const pilot: Pilot= new Pilot(req.body.idPiloto, req.body.Nombre,req.body.Apodo,req.body.Podios,req.body.Victorias,req.body.idCarroFav,req.body.Equipo_idEquipo);
    const reponse: any =await pilotServices.del(pilot);
    res.status(201).json(pilot);
}

export async function seeByPodium(req: Request, res: Response){
    const pilots: Array<any> = await pilotServices.seeByPodium(req.body.Podios);
    res.status(200).json(pilots);
}

export async function see3Best(req: Request, res: Response){
    const pilots: Array<any> = await pilotServices.see3Best();
    res.status(200).json(pilots);
}

export async function updateNick(req: Request, res: Response){
    const pilotbyid: any =await pilotServices.getById(req.body.id);
    const pilot: Pilot=new Pilot(pilotbyid.id,pilotbyid.nombre, pilotbyid.apodo, pilotbyid.podios, pilotbyid.victorias, 
        pilotbyid.idCarroFav, pilotbyid.equipo_idEquipo);
        
        await pilotServices.updateNick(pilot, req.body.Apodo);

        res.status(201).json(pilot);
}

export async function seeByPoints(req: Request, res: Response){
    const pilots: Array<any> = await pilotServices.seeByPoints();
    res.status(200).json(pilots);
}

export async function getById(req: Request, res: Response){
    const pilotbyid: any =await pilotServices.getById(req.body.idPiloto);
    const pilot: Pilot=new Pilot(pilotbyid.idPiloto,pilotbyid.nombre, pilotbyid.apodo, pilotbyid.podios, pilotbyid.victorias, 
        pilotbyid.idCarroFav, pilotbyid.equipo_idEquipo);
    res.status(201).json(pilot);
}*/