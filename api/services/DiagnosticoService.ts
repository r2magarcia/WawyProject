import Model from "../models/model";

const { database } = require("../config");

module DiagnosticoService {
  export function insertEntry(filtroquery: string, nombre: string) {
    const query = `INSERT INTO ${database}.diagnostico (id, query, nombre) VALUES (NULL, '${filtroquery}', '${nombre}')`;
    const result = Model.execQuery(query);

    return result;
  }
  export function getDiagnosticos() {
    const query = `SELECT * FROM ${database}.diagnostico`;
    const result = Model.execQuery(query);

    return result;
  }

  export function getUsersByDiagnosis(filtro: any) {
    const usuarios = Model.execQuery(filtro.query)
    return usuarios;
  }

  export function insertDiagnosisForUser(idDiagnosis: number, usuarios: Array<any>){
    let insertQuery = `INSERT INTO ${database}.usuarios_has_diagnostico (id, usuarios_idusuario, diagnostico_id, notas) VALUES `;
    if (usuarios.length > 0) {
        usuarios.map((user: any) =>{
            console.log(user);
            
            insertQuery += `(NULL,' ${user.idusuario}', '${idDiagnosis}', ''),`;
        })
    }
    insertQuery = insertQuery.slice(0, -1);
    console.log(insertQuery);
    
    const _ = Model.execQuery(insertQuery);
  }

  export function getDiagnosticosForUsers() {
    const query = `SELECT usuarios.nombre as user, diagnostico.nombre as diagnostico, usuarios_has_diagnostico.notas as notas FROM ${database}.usuarios_has_diagnostico JOIN ${database}.usuarios ON usuarios_has_diagnostico.usuarios_idusuario = usuarios.idusuario JOIN ${database}.diagnostico ON diagnostico.id = usuarios_has_diagnostico.diagnostico_id GROUP BY usuarios.idusuario, usuarios_has_diagnostico.diagnostico_id;`;
    console.log(query);
    
    const result = Model.execQuery(query);

    return result;
  }
}

export default DiagnosticoService;
