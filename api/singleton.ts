const mysql = require('mysql');

export default class singleton{

    private static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'u676173880_wawyroot',
        password: 'Wawydbpassword2022'
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