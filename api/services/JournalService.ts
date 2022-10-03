import Model from "../models/model";

const { database } = require("../config");

module JournalService {
  export function insertEntry(
    notas: string,
    email: string,
    seguimientoDiario: string,
    proyectoSemanal: string,
    fecha: Date
  ) {
    const query = `UPDATE ${database}.bulletjournal SET  notas = '${notas}', seguimientoDiario = '${JSON.stringify(
      seguimientoDiario
    )}', proyectoSemanal = '${JSON.stringify(
      proyectoSemanal
    )}', fecha = '${fecha}' WHERE idUsuario IN (SELECT idusuario FROM ${database}.usuarios WHERE email='${email}')`;
    const result = Model.execQuery(query);
    // console.log(email);

    return result;
  }
  export function getEntries(email: string) {
    const query = `SELECT * FROM ${database}.bulletjournal WHERE idUsuario = (SELECT idusuario FROM ${database}.usuarios WHERE email='${email}') LIMIT 1`;
    const result = Model.execQuery(query);

    return result;
  }
}

export default JournalService;
