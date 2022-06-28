import Model from '../models/model';

const { database } = require('../config');

module NotToDoListService {

    export function insertNote(contenido: string, categoria: Number, userEmail: String){
        
        const query = `INSERT INTO ${database}.categoriantdl (id, contenido, idCategoria, idUsuario) VALUES (NULL, '${contenido}', ${categoria}, (SELECT idusuario FROM ${database}.usuarios WHERE email='${userEmail}' LIMIT 1))`;
            const result = Model.execQuery(query);
            return result;

    }

    export function deleteNote(id: number){
        const query = `DELETE FROM ${database}.categoriantdl WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateNote(id: number, nombre: string){
        const query = `UPDATE ${database}.categoriantdl SET nombre = '${nombre}' WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllNotes(){
        const query = `SELECT * from ${database}.categoriantdl`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getById(id: number){
        const query = `SELECT * from ${database}.categoriantdl where id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default NotToDoListService;