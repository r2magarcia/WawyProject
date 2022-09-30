"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../models/model"));
var database = require("../config").database;
var UserService;
(function (UserService) {
    function insertUser(email, contrasena, activo, nombre) {
        var query = "INSERT INTO " + database + ".usuarios (idusuario, email, contrasena, activo, nombre) VALUES (NULL, '" + email + "', '" + contrasena + "', '" + activo + "', '" + nombre + "')";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.insertUser = insertUser;
    function deleteUser(id) {
        var query = "DELETE FROM " + database + ".usuariost WHERE idusuario = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.deleteUser = deleteUser;
    function updateUser(id, email) {
        var query = "UPDATE " + database + ".usuarios SET email = '" + email + "' WHERE idusuario = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.updateUser = updateUser;
    /*export function setActive(id:number){
          const query = `UPDATE ${database}.usuarios SET activo = true`
      }*/
    function getAllUsers() {
        console.log("getAllUsers");
        var query = "SELECT * from " + database + ".usuarios";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.getAllUsers = getAllUsers;
    function filterUsers(input) {
        console.log("filterUsers");
        var query = "SELECT * from " + database + ".usuarios";
        if (input)
            query += " WHERE nombre LIKE '%" + input + "%' OR email LIKE '%" + input + "%';";
        console.log(query);
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.filterUsers = filterUsers;
    function getChatResponsesByUser(userId) {
        var query = "SELECT * from " + database + ".respuestas nombre WHERE idusuario = " + userId + " ORDER BY fecha ASC";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.getChatResponsesByUser = getChatResponsesByUser;
    function getUserById(id) {
        var query = "SELECT * from " + database + ".usuarios where idusuario = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.getUserById = getUserById;
    function getIdByEmail(email) {
        var query = "SELECT idusuario from " + database + ".usuarios where email = '" + email + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.getIdByEmail = getIdByEmail;
    function getUser(email, pass) {
        var query = "SELECT idusuario from " + database + ".usuarios where email = '" + email + "' and contrasena = '" + pass + "' LIMIT 1";
        var result = model_1.default.execQuery(query);
        // console.log(result);
        return result;
    }
    UserService.getUser = getUser;
    function getAdmin(email, pass) {
        var query = "SELECT idusuario from " + database + ".admins where email = '" + email + "' and contrasena = '" + pass + "' LIMIT 1";
        var result = model_1.default.execQuery(query);
        // console.log(result);
        return result;
    }
    UserService.getAdmin = getAdmin;
})(UserService || (UserService = {}));
exports.default = UserService;
