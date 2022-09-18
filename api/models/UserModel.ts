import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class User extends Model /*implements ModelI*/{
    idusuario: number | null = null;
    nombre: string;
    email: string;
    contrasena: string;
    active: number;

    constructor(nombre: string, email:string, contrasena:string, active:number, idusuario?: number){
        super();

        if (idusuario){
            this.idusuario=idusuario;
        };
        this.nombre=nombre;
        this.email=email;
        this.contrasena=contrasena;
        this.active=active;
    }         
    

}