import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class NotToDoList extends Model /*implements ModelI*/{
    id: number | null = null;
    nombre: string;

    constructor(nombre: string, id?: number){
        super();

        if (id){
            this.id=id;
        };
        this.nombre=nombre;
    }         
    

}