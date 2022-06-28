"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../models/model"));
var database = require('../config').database;
var NotToDoListService;
(function (NotToDoListService) {
    function insertNote(contenido, categoria, userEmail) {
        var query = "INSERT INTO " + database + ".categoriantdl (id, contenido, idCategoria, idUsuario) VALUES (NULL, '" + contenido + "', " + categoria + ", (SELECT idusuario FROM " + database + ".usuarios WHERE email='" + userEmail + "' LIMIT 1))";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.insertNote = insertNote;
    function deleteNote(id) {
        var query = "DELETE FROM " + database + ".categoriantdl WHERE id = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.deleteNote = deleteNote;
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
