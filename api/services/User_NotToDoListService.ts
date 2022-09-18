import Pilot from "../models/User_NotToDoListModel";
import Model from "../models/model";

const { database } = require("../config");

module UserHasListService {
  export function insertUserHasList(text: string) {
    const query = `INSERT INTO ${database}.nottodolist (id, nombre) VALUES (NULL, '${text}');`;
    console.log(query);
    const result = Model.execQuery(query);
    return result;
  }

  export function deleteUserHasList(id: number) {
    const query = `DELETE FROM ${database}.nottodolist WHERE id = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }

  export function updateUserHasList(id: number, text: string) {
    const query = `UPDATE ${database}.nottodolist SET texto = '${text}' WHERE id = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }

  export function getAllUserHasList(email: string) {
    const query = `SELECT id, idCategoria, contenido from ${database}.nottodolist WHERE  idUsuario = (SELECT idusuario FROM ${database}.usuarios WHERE email='${email}' LIMIT 1) `;
    const result = Model.execQuery(query);
    return result;
  }

  export function getUserHasListById(id: number) {
    const query = `SELECT * from ${database}.nottodolist WHERE id = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }
}

export default UserHasListService;
