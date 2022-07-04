import Pilot from '../models/DiaryModel';
import Model from '../models/model';

const { database } = require('../config');

module DiaryService {

    export function insertDiary(fecha:Date, idEmocion:number, email:string){
        const query = `INSERT INTO ${database}.diarioemociones (id, fecha, idUsuario, idEmocion) VALUES (NULL, '${fecha}', (SELECT idusuario FROM ${database}.usuarios WHERE email='${email}' LIMIT 1), '${idEmocion}')`;
        const result = Model.execQuery(query);
        console.log(email);
        
        return result;
    }

    export function getDiarySortedByEmail(email: string){
        const query = `SELECT diarioemociones.fecha, emociones.nombre, emociones.color from ${database}.diarioemociones INNER JOIN ${database}.emociones ON diarioemociones.idEmocion=emociones.id WHERE idUsuario = (SELECT idusuario FROM ${database}.usuarios WHERE email='${email}' LIMIT 1) ORDER BY diarioemociones.fecha `;
        console.log(query);
        
        
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteDiary(id:number){
        const query = `DELETE FROM ${database}.diarioemociones WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateDiary(id:number, fecha:Date){
        const query = `UPDATE ${database}.diarioemociones SET fecha = '${fecha}' WHERE id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllDiarys(){
        const query = `SELECT * from ${database}.diarioemociones`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getDiaryrById(id: number){
        const query = `SELECT * from ${database}.diarioemociones where id = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getDiarySorted(id:number){
        const query = `SELECT * from ${database}.diarioemociones WHERE idUsuario = '${id}' ORDER BY fecha`;
        console.log(query);
        
        const result = Model.execQuery(query);
        return result;
    }


}

export default DiaryService;