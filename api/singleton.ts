const mysql = require('mysql');

export default class singleton{

    private static dbc: any = mysql.createConnection({
        host: '82.180.130.26',
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