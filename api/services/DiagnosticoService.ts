import Model from "../models/model";

const { database } = require('../config');

module DiagnosticoService {

    export function insertEntry(filtroquery: string, nombre: string){
        const query = `INSERT INTO ${database}.diagnostico (id, query, nombre) VALUES (NULL, '${filtroquery}', '${nombre}')`;
        const result = Model.execQuery(query);
        
        return result;
    }

}

export default DiagnosticoService;