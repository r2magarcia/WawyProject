import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class NotToDoList extends Model /*implements ModelI*/{
    idlist: number | null = null;
    nombre: string;

    constructor(nombre: string, idlist?: number){
        super();

        if (idlist){
            this.idlist=idlist;
        };
        this.nombre=nombre;
    }         
    

}