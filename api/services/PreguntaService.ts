import Model from "../models/model";

const { database } = require('../config');

module PreguntaService {

    export function getAllPreguntas(){
        const query = `SELECT * from ${database}.preguntas WHERE relevanteparadiagnostico != 1`;
        console.log(query);
        
        const result = Model.execQuery(query);
        return result;
    }

}

export default PreguntaService;