import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class User extends Model /*implements ModelI*/{
    idlist: number | null = null;
    nombre: string;
    email: string;
    contrasena: string;
    active: number;

    constructor(nombre: string, email:string, contrasena:string, active:number, idlist?: number){
        super();

        if (idlist){
            this.idlist=idlist;
        };
        this.nombre=nombre;
        this.email=email;
        this.contrasena=contrasena;
        this.active=active;
    }         
    

}