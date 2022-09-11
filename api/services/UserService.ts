import User from '../models/UserModel';
import Model from '../models/model';

const { database } = require('../config');

module UserService {

    export function inserUser(email: string, contrasena:string, activo: number){
        const query = `INSERT INTO ${database}.usuarios (idusuario, email, contrasena, activo) VALUES (NULL, '${email}', '${contrasena}', '${activo}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteUser(id: number){
        const query = `DELETE FROM ${database}.usuariost WHERE idusuario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateUser(id: number, email: string){
        const query = `UPDATE ${database}.usuarios SET email = '${email}' WHERE idusuario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    /*export function setActive(id:number){
        const query = `UPDATE ${database}.usuarios SET activo = true`
    }*/

    export function getAllUsers(){
        const query = `SELECT * from ${database}.usuarios`;
        const result = Model.execQuery(query);
        return result;
    }

    export function filterUsers(input: string){
        const query = `SELECT * from ${database}.usuarios nombre WHERE LIKE '%${input}%' OR email LIKE '%${input}%;`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getChatResponsesByUser(userId: number){
        const query = `SELECT * from ${database}.respuestas nombre WHERE idusuario = ${userId} ORDER BY fecha ASC`;
        const result = Model.execQuery(query);
        return result;
    }

    
    export function getUserById(id: number){
        const query = `SELECT * from ${database}.usuarios where idusuario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function getIdByEmail(email: string){
        const query = `SELECT idusuario from ${database}.usuarios where email = '${email}'`;
        const result = Model.execQuery(query);
        return result;
    }



}

export default UserService;