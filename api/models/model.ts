const mysql = require('mysql');
import singleton from '../singleton';
const dbc = singleton.getInstance();


export default class Model {

    /*private static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'finalpil_root',
        password: 'Alegar50991'
    }); */
    
    constructor() { }
    
    static execQuery(query: string):Promise<any> {
        let result = new Promise((resolve, reject) => {
            dbc.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });
        return result;
    }
}