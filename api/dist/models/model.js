"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var singleton_1 = __importDefault(require("../singleton"));
var dbc = singleton_1.default.getInstance();
var Model = /** @class */ (function () {
    /*private static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'finalpil_root',
        password: 'Alegar50991'
    }); */
    function Model() {
    }
    Model.execQuery = function (query) {
        var result = new Promise(function (resolve, reject) {
            dbc.query(query, function (err, rows, fields) {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
        return result;
    };
    return Model;
}());
exports.default = Model;
