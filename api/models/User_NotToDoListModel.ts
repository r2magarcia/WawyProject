import Model from './model';
// import { ModelI } from '../interfaces/ModelI';


export default class User_NotToDoList extends Model /*implements ModelI*/{
    idUserHasList: number | null = null;
    idUser: number;
    not_to_do_list_idnot_to_do_list: number;
    texto: string;

    constructor(idUser:number, not_to_do_list_idnot_to_do_list:number, texto:string, idUserHasList?: number){
        super();

        if (idUserHasList){
            this.idUserHasList=idUserHasList;
        };
        this.idUser=idUser;
        this.not_to_do_list_idnot_to_do_list=not_to_do_list_idnot_to_do_list;
        this.texto=texto;
    }         
}