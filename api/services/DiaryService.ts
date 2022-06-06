import Pilot from '../models/DiaryModel';
import Model from '../models/model';

const { db } = require('../config');

module DiaryService {

    export function insertDiary(fecha:Date, idUser:number, idEmocion:number){
        const query = `INSERT INTO mydb.diarioemociones (id_diario, fecha, usuarios_idusuario, estados_emocionales_idmocion) VALUES (NULL, '${fecha}', '${idUser}', '${idEmocion}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteDiary(id:number){
        const query = `DELETE FROM mydb.diarioemociones WHERE id_diario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateDiary(id:number, fecha:Date){
        const query = `UPDATE mydb.diarioemociones SET fecha = '${fecha}' WHERE id_diario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getAllDiarys(){
        const query = `SELECT * from mydb.diarioemociones`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getDiaryrById(id: number){
        const query = `SELECT * from mydb.diarioemociones where id_diario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getDiarySorted(id:number){
        const query = `SELECT * from mydb.diarioemociones WHERE usuarios_idusuario = '${id}' ORDER BY fecha`;
        console.log(query);
        
        const result = Model.execQuery(query);
        return result;
    }


}

export default DiaryService;