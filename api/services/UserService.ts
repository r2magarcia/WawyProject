import User from '../models/UserModel';
import Model from '../models/model';

const { db } = require('../config');

module UserService {

    export function inserUser(email: string, contrasena:string, activo: number){
        const query = `INSERT INTO mydb.usuarios (idusuario, email, contrasena, activo) VALUES (NULL, '${email}', '${contrasena}', '${activo}')`;
        const result = Model.execQuery(query);
        return result;
    }

    export function deleteUser(id: number){
        const query = `DELETE FROM mydb.usuariost WHERE idusuario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    export function updateUser(id: number, email: string){
        const query = `UPDATE mydb.usuarios SET email = '${email}' WHERE idusuario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }

    /*export function setActive(id:number){
        const query = `UPDATE mydb.usuarios SET activo = true`
    }*/

    export function getAllUsers(){
        const query = `SELECT * from mydb.usuarios`;
        const result = Model.execQuery(query);
        return result;
    }
    
    export function getUserById(id: number){
        const query = `SELECT * from mydb.usuarios where idusuario = '${id}'`;
        const result = Model.execQuery(query);
        return result;
    }


}

export default UserService;