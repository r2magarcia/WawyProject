import Pilot from '../models/User_NotToDoListModel';
import Model from '../models/model';

const { database } = require('../config');

module UserHasListService {

    export function insertUserHasList(text:string){
        const query = `INSERT INTO ${database}.categoriantdl (id, nombre) VALUES (NULL, '${text}');`;
        console.log(query);
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteUserHasList(id:number){
        const query = `DELETE FROM ${database}.categoriantdl WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateUserHasList(id:number, text:string){
        const query = `UPDATE ${database}.categoriantdl SET texto = '${text}' WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllUserHasList(){
        const query = `SELECT * from ${database}.categoriantdl`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getUserHasListById(id: number){
        const query = `SELECT * from ${database}.categoriantdl WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default UserHasListService;