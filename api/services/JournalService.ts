import Model from "../models/model";

const { database } = require('../config');

module JournalService {

    export function insertEntry(notas: string, idUsuario:number, seguimientoDiario:string, proyectoSemanal:string, fecha:Date){
        const query = `INSERT INTO ${database}.bulletjournal (id, notas, idUsuario, seguimientoDiario, proyectoSemanal, fecha) VALUES (NULL, '${notas}', '${idUsuario}', '${seguimientoDiario}', '${proyectoSemanal}', '${fecha}'')`;
        const result = Model.execQuery(query);
        // console.log(email);
        
        return result;
    }

}

export default JournalService;