import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class NotToDoList extends Model /*implements ModelI*/{
    idnot_to_do_list: number | null = null;
    nombre: string;

    constructor(nombre: string, idnot_to_do_list?: number){
        super();

        if (idnot_to_do_list){
            this.idnot_to_do_list=idnot_to_do_list;
        };
        this.nombre=nombre;
    }         
    

}