import { Request, Response, response } from "express"
import UserService from "../services/UserService";
import User from "../models/UserModel";

export async function getAllUsers(req: Request, res: Response){
    console.log("get all Users controller");
    const users: Array<User>=await UserService.getAllUsers();
    res.status(201).json(users);
}

export async function createUser(req: Request, res: Response){
    console.log(req.body);
    const user: User= new User(req.body.nombre, req.body.email, req.body.contrasena, req.body.active);
    const response : User = await UserService.inserUser(user.email, user.contrasena, user.active);
    res.status(201).json(response);
}

export async function getIdByEmail(req: Request, res: Response){
    console.log("get all Users controller");
    const email:string = req.params.email;
    const users: Array<User>=await UserService.getIdByEmail(email);
    console.log(users);
    
    res.status(201).json(users);
}