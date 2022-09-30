"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../models/model"));
var database = require("../config").database;
var NotToDoListService;
(function (NotToDoListService) {
    function insertNotes(categories, email) {
        var query = "INSERT INTO " + database + ".nottodolist (id, contenido, idCategoria, idUsuario) VALUES";
        categories.map(function (category) {
            console.log(category);
            category.content.map(function (note) {
                query += " (NULL, '" + note + "', " + category.id + ", (SELECT idusuario FROM " + database + ".usuarios WHERE email='" + email + "')),";
            });
        });
        query = query.slice(0, -1);
        console.log(query);
        var result = model_1.default.execQuery(query);
        return null;
    }
    NotToDoListService.insertNotes = insertNotes;
    function deleteNote(id) {
        var query = "DELETE FROM " + database + ".categoriantdl WHERE id = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.deleteNote = deleteNote;
    function deleteNotesFromUser(email) {
        var query = "DELETE FROM " + database + ".nottodolist WHERE idUsuario IN (SELECT idusuario FROM " + database + ".usuarios WHERE email='" + email + "')";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.deleteNotesFromUser = deleteNotesFromUser;
    function updateNote(id, nombre) {
        var query = "UPDATE " + database + ".categoriantdl SET nombre = '" + nombre + "' WHERE id = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.updateNote = updateNote;
    function getAllNotes() {
        var query = "SELECT * from " + database + ".categoriantdl";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.getAllNotes = getAllNotes;
    function getById(id) {
        var query = "SELECT * from " + database + ".categoriantdl where id = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.getById = getById;
})(NotToDoListService || (NotToDoListService = {}));
exports.default = NotToDoListService;
