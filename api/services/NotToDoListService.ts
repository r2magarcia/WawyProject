import Model from "../models/model";

const { database } = require("../config");

module NotToDoListService {
  export function insertNotes(categories: Array<any>, email: string) {
    let query = `INSERT INTO ${database}.nottodolist (id, contenido, idCategoria, idUsuario) VALUES`;
    categories.map((category) => {
        console.log(category);
        
        category.content.map((note: string) => {
            query += ` (NULL, '${note}', ${category.id}, (SELECT idusuario FROM ${database}.usuarios WHERE email='${email}')),`;
        })
      });
      query = query.slice(0, -1);

    console.log(query);
    
    const result = Model.execQuery(query);
    return null;
  }

  export function deleteNote(id: number) {
    const query = `DELETE FROM ${database}.categoriantdl WHERE id = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }

  export function deleteNotesFromUser(email: string) {
    const query = `DELETE FROM ${database}.nottodolist WHERE idUsuario IN (SELECT idusuario FROM ${database}.usuarios WHERE email='${email}')`;
    const result = Model.execQuery(query);
    return result;
  }

  export function updateNote(id: number, nombre: string) {
    const query = `UPDATE ${database}.categoriantdl SET nombre = '${nombre}' WHERE id = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }

  export function getAllNotes() {
    const query = `SELECT * from ${database}.categoriantdl`;
    const result = Model.execQuery(query);
    return result;
  }

  export function getById(id: number) {
    const query = `SELECT * from ${database}.categoriantdl where id = '${id}'`;
    const result = Model.execQuery(query);
    return result;
  }
}

export default NotToDoListService;
