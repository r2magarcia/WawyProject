import Pilot from '../models/AnswerModel';
import Model from '../models/model';

const { db } = require('../config');

module AnswerService {

    export function insertAnswer(pregunta: string, respuesta:string, fecha:Date, idUser:number){
        const query = `INSERT INTO mydb.respuestas (id_respuesta, pregunta, respuesta, fecha, usuarios_idusuario) VALUES (NULL, '${pregunta}', '${respuesta}', '${fecha}', '${idUser}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteAnswer(id: number){
        const query = `DELETE FROM mydb.respuestas WHERE id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateAnswer(id: number, respuesta: string){
        const query = `UPDATE mydb.respuestas SET respuesta = '${respuesta}' WHERE id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateQuestion(id: number, pregunta: string){
        const query = `UPDATE mydb.respuestas SET pregunta = '${pregunta}' WHERE id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllAnswers(){
        const query = `SELECT * from mydb.respuestas`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getAnswerById(id: number){
        const query = `SELECT * from mydb.respuestas where id_respuesta = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default AnswerService;