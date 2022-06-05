"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../models/model"));
var db = require('../config').db;
var UserService;
(function (UserService) {
    function inserUser(email, contrasena, activo) {
        var query = "INSERT INTO mydb.usuarios (idusuario, email, contrasena, activo) VALUES (NULL, '" + email + "', '" + contrasena + "', '" + activo + "')";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.inserUser = inserUser;
    function deleteUser(id) {
        var query = "DELETE FROM mydb.usuariost WHERE idusuario = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.deleteUser = deleteUser;
    function updateUser(id, email) {
        var query = "UPDATE mydb.usuarios SET email = '" + email + "' WHERE idusuario = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.updateUser = updateUser;
    /*export function setActive(id:number){
        const query = `UPDATE mydb.usuarios SET activo = true`
    }*/
    function getAllUsers() {
        var query = "SELECT * from mydb.usuarios";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.getAllUsers = getAllUsers;
    function getUserById(id) {
        var query = "SELECT * from mydb.usuarios where idusuario = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.getUserById = getUserById;
})(UserService || (UserService = {}));
exports.default = UserService;
