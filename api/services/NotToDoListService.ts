import Model from '../models/model';

const { database } = require('../config');

module NotToDoListService {

    export function insertNote(contenido: string, categoria: Number, userEmail: String){
        
        const query = `INSERT INTO ${database}.nottodolist (id, contenido, idCategoria, idUsuario) VALUES (NULL, '${contenido}', ${categoria}, (SELECT idusuario FROM ${database}.usuarios WHERE email='${userEmail}' LIMIT 1))`;
            const result = Model.execQuery(query);
            return result;

    }

    export function deleteNote(id: number){
        const query = `DELETE FROM ${database}.nottodolist WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateNote(id: number, nombre: string){
        const query = `UPDATE ${database}.nottodolist SET nombre = '${nombre}' WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllNotes(){
        const query = `SELECT * from ${database}.nottodolist`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getById(id: number){
        const query = `SELECT * from ${database}.nottodolist where id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default NotToDoListService;