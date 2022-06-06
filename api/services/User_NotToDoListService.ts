import Pilot from '../models/User_NotToDoListModel';
import Model from '../models/model';

const { db } = require('../config');

module UserHasListService {

    export function insertUserHasList(idUser:number, idList:number, text:string){
        const query = `INSERT INTO mydb.usuarios_has_not_to_do_list (id_usuario_not_to_do_list, usuarios_idusuario, not_to_do_list_idnot_to_do_list, texto) VALUES (NULL, '${idUser}', '${idList}', 'Hoy estoy medio raro');`;
        console.log(query);
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteUserHasList(id:number){
        const query = `DELETE FROM mydb.usuarios_has_not_to_do_list WHERE id_usuario_not_to_do_list = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateUserHasList(id:number, text:string){
        const query = `UPDATE mydb.usuarios_has_not_to_do_list SET texto = '${text}' WHERE id_usuario_not_to_do_list = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllUserHasList(){
        const query = `SELECT * from mydb.usuarios_has_not_to_do_list`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getUserHasListByUserId(id: number){
        const query = `SELECT * from mydb.usuarios_has_not_to_do_list WHERE usuarios_idusuario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getUserHasListById(id: number){
        const query = `SELECT * from mydb.usuarios_has_not_to_do_list WHERE id_usuario_not_to_do_list = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default UserHasListService;