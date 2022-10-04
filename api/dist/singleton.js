"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var singleton = /** @class */ (function () {
    function singleton() {
    }
    singleton.getInstance = function () {
        if (!singleton.dbc) {
            singleton.dbc = new singleton();
        }
        return singleton.dbc;
    };
    singleton.dbc = mysql.createConnection({
        host: 'localhost',
        user: 'u676173880_wawyroot',
        password: 'Wawydbpassword2022'
    });
    return singleton;
}());
exports.default = singleton;
