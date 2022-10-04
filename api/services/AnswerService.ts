import Pilot from '../models/AnswerModel';
import Model from '../models/model';

const { database } = require('../config');

module AnswerService {

    export function insertAnswer(pregunta: string, respuesta:string, fecha:Date, idUser:number){
        const query = `INSERT INTO ${database}.respuestas (id_respuesta, pregunta, respuesta, fecha, usuarios_idusuario) VALUES (NULL, '${pregunta}', '${respuesta}', '${String(fecha).slice(0, 19).replace('T', ' ')}', '${idUser}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteAnswer(id: number){
        const query = `DELETE FROM ${database}.respuestas WHERE id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateAnswer(id: number, respuesta: string){
        const query = `UPDATE ${database}.respuestas SET respuesta = '${respuesta}' WHERE id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateQuestion(id: number, pregunta: string){
        const query = `UPDATE ${database}.respuestas SET pregunta = '${pregunta}' WHERE id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllAnswers(){
        const query = `SELECT * from ${database}.respuestas`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getAnswerById(id: number){
        const query = `SELECT * from ${database}.respuestas where id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getChatResponsesByUser(userId: string){
        const query = `SELECT * from ${database}.respuestas nombre WHERE idusuario = '${userId}' ORDER BY fecha ASC`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default AnswerService;