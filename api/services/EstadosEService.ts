import Pilot from '../models/EstadosE';
import Model from '../models/model';

const { db } = require('../config');

module EstadosService {

    export function insertEstado(texto:string, color:string){
        const query = `INSERT INTO mydb.estados_emocionales (texto) VALUES (NULL, '${texto}', '${color}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteEstado(id:number){
        const query = `DELETE FROM mydb.estados_emocionales WHERE idemocion = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateEstado(id:number, texo:string){
        const query = `UPDATE mydb.estados_emocionales SET texto = '${texo}' WHERE idemocion = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllEstados(){
        const query = `SELECT * from mydb.estados_emocionales`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getEstadoById(id: number){
        const query = `SELECT * from mydb.estados_emocionales where idemocion = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getEstadoByNombre(texto: string){
        const query = `SELECT idemocion from mydb.estados_emocionales WHERE texto = '${texto}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default EstadosService;