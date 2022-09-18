"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../models/model"));
var database = require('../config').database;
var UserService;
(function (UserService) {
    function inserUser(email, contrasena, activo) {
        var query = "INSERT INTO " + database + ".usuarios (idusuario, email, contrasena, activo) VALUES (NULL, '" + email + "', '" + contrasena + "', '" + activo + "')";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.inserUser = inserUser;
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
        var query = "SELECT * from " + database + ".usuarios";
        var result = model_1.default.execQuery(query);
        return result;
    }
    UserService.getAllUsers = getAllUsers;
    function filterUsers(input) {
        var query = "SELECT * from " + database + ".usuarios nombre WHERE LIKE '%" + input + "%' OR email LIKE '%" + input + "%;";
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
})(UserService || (UserService = {}));
exports.default = UserService;
