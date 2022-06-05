import Pilot from '../models/NotToDoListModel';
import Model from '../models/model';

const { db } = require('../config');

module NotToDoListService {

    export function insertNote(name: string){
        const query = `INSERT INTO mydb.not_to_do_list (idnot_to_do_list, nombre) VALUES (NULL, '${name}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteNote(id: number){
        const query = `DELETE FROM mydb.not_to_do_list WHERE idnot_to_do_list = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateNote(id: number, nombre: string){
        const query = `UPDATE mydb.not_to_do_list SET Nombre = '${nombre}' WHERE idnot_to_do_list = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllNotes(){
        const query = `SELECT * from mydb.not_to_do_list`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getById(id: number){
        const query = `SELECT * from mydb.not_to_do_list where idemocion = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default NotToDoListService;