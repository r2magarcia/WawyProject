import User from "../models/UserModel";
import Model from "../models/model";

const { database } = require("../config");

module UserService {
  export function insertUser(email: string, contrasena: string, activo: number, nombre:string) {
    const query = `INSERT INTO ${database}.usuarios (idusuario, email, contrasena, activo, nombre) VALUES (NULL, '${email}', '${contrasena}', '${activo}', '${nombre}')`;
    const result = Model.execQuery(query);
    return result;
  }

  export function insertHelp(email: string) {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');;
    const query = `INSERT INTO ${database}.usuariosporayudar (id, email, notas, ayuda, fecha) VALUES (NULL, '${email}', NULL, 1, '${date}')`;
    console.log(query);
    
    const result = Model.execQuery(query);
    return result;
  }

  export function getUserProfesionalRequired() {
    const query = `SELECT usuariosporayudar.id as id, usuarios.nombre, usuariosporayudar.email as email, usuariosporayudar.notas as notas, usuariosporayudar.fecha FROM ${database}.usuariosporayudar JOIN ${database}.usuarios ON usuarios.email = usuariosporayudar.email WHERE usuariosporayudar.ayuda=1 ORDER BY usuariosporayudar.fecha`;
    console.log(query);
    
    const result = Model.execQuery(query);
    return result;
  }

  export function deleteUser(id: number) {
    const query = `DELETE FROM ${database}.usuarios WHERE idusuario = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }

  export function updateUser(id: number, email: string) {
    const query = `UPDATE ${database}.usuarios SET email = '${email}' WHERE idusuario = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }

  /*export function setActive(id:number){
        const query = `UPDATE ${database}.usuarios SET activo = true`
    }*/

  export function getAllUsers() {
    console.log("getAllUsers");

    const query = `SELECT * from ${database}.usuarios`;
    const result = Model.execQuery(query);
    return result;
  }

  export function filterUsers(input: string) {
    console.log("filterUsers");

    let query = `SELECT * from ${database}.usuarios`;
    if (input)
      query += ` WHERE nombre LIKE '%${input}%' OR email LIKE '%${input}%';`;
    console.log(query);

    const result = Model.execQuery(query);
    return result;
  }

  export function getChatResponsesByUser(userId: number) {
    const query = `SELECT * from ${database}.respuestas nombre WHERE idusuario = ${userId} ORDER BY fecha ASC`;
    const result = Model.execQuery(query);
    return result;
  }

  export function getUserById(id: number) {
    const query = `SELECT * from ${database}.usuarios where idusuario = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }

  export function getIdByEmail(email: string) {
    const query = `SELECT idusuario from ${database}.usuarios where email = '${email}' LIMIT 1`;
    const result = Model.execQuery(query);
    return result;
  }

  export function getUser(email: string, pass: string) {
    const query = `SELECT idusuario from ${database}.usuarios where email = '${email}' and contrasena = '${pass}' LIMIT 1`;
    const result = Model.execQuery(query);
    // console.log(result);
    
    return result;
  }

  export function getAdmin(email: string, pass: string) {
    const query = `SELECT idusuario from ${database}.admins where email = '${email}' and contrasena = '${pass}' LIMIT 1`;
    const result = Model.execQuery(query);
    // console.log(result);
    
    return result;
  }
}

export default UserService;
