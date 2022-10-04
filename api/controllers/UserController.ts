import { Request, Response, response } from "express"
import UserService from "../services/UserService";
import User from "../models/UserModel";

export async function getAllUsers(req: Request, res: Response){
    const users: Array<User>=await UserService.getAllUsers();    
    res.status(201).json(users);
}

export async function createUser(req: Request, res: Response){
    const user: User= new User(req.body.nombre, req.body.email, req.body.contrasena, req.body.active);
    console.log(user);
    const response : User = await UserService.insertUser(user.email, user.contrasena, user.active, user.nombre);
    res.status(201).json(response);
}

export async function filterUserBy(req: Request, res: Response){
    const response : User = await UserService.filterUsers(req.params.filterBy);
    res.status(201).json(response);
}

export async function getIdByEmail(req: Request, res: Response){
    console.log("get all Users controller");
    const email:string = req.params.email;
    const users: Array<User>=await UserService.getIdByEmail(email);
    console.log(users);
    
    res.status(201).json(users);
}

export async function sendHelp(req: Request, res: Response){
    const response : any = await UserService.insertHelp(req.params.email);
    res.status(201).json(response);
}

export async function logIn(req: Request, res: Response){
    console.log(req.params);
    const cred: string[] = req.params.credentials.split("*", 2);
    const email: string = cred[0];
    const pass: string = cred[1];
    const user: Array<User>=await UserService.getUser(email, pass);
    if (user.length != 0) {
        res.status(201).json(user);
    } else {
        const admin: Array<User>=await UserService.getAdmin(email, pass);
        if (admin.length != 0) {
            res.status(201).json({
                userType: "Admin"
            });
        }else{
            res.status(403).json(admin);
        }
    }

}