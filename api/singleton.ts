const mysql = require('mysql');

export default class singleton{

    private static dbc: any = mysql.createConnection({
        host: '82.180.153.188',
        user: 'u676173880_wawyroot',
        password: 'passDBWawy2022'
    }); 

    private constructor(){

    }

    public static getInstance(){
        if(!singleton.dbc){
            singleton.dbc = new singleton();
        }
        return singleton.dbc;
    }
}