import Pilot from '../models/EstadosE';
import Model from '../models/model';

const { database } = require('../config');

module EstadosService {

    export function insertEstado(nombre:string, color:string){
        const query = `INSERT INTO ${database}.emociones (id, nombre, color) VALUES (NULL, '${nombre}', '${color}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteEstado(id:number){
        const query = `DELETE FROM ${database}.emociones WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateEstado(id:number, nombre:string){
        const query = `UPDATE ${database}.emociones SET nombre = '${nombre}' WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllEstados(){
        const query = `SELECT * from ${database}.emociones`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getEstadorById(id: number){
        const query = `SELECT * from ${database}.emociones where id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }
}

export default EstadosService;