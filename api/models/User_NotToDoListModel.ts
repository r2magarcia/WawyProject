import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class User_NotToDoList extends Model /*implements ModelI*/{
    id: number | null = null;
    nombre: string;
    idCategoria: number;
    contenido: string;

    constructor(nombre:string, idCategoria: number, contenido: string, id?: number){
        super();

        if (id){
            this.id=id;
        };
        this.nombre=nombre;
        this.idCategoria=idCategoria;
        this.contenido=contenido;
    }         
}