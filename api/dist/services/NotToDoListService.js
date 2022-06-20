"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../models/model"));
var db = require('../config').db;
var NotToDoListService;
(function (NotToDoListService) {
    function insertNote(name) {
        var query = "INSERT INTO mydb.not_to_do_list (idnot_to_do_list, nombre) VALUES (NULL, '" + name + "')";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.insertNote = insertNote;
    function deleteNote(id) {
        var query = "DELETE FROM mydb.not_to_do_list WHERE idnot_to_do_list = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.deleteNote = deleteNote;
    function updateNote(id, nombre) {
        var query = "UPDATE mydb.not_to_do_list SET nombre = '" + nombre + "' WHERE idnot_to_do_list = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.updateNote = updateNote;
    function getAllNotes() {
        var query = "SELECT * from mydb.not_to_do_list";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.getAllNotes = getAllNotes;
    function getById(id) {
        var query = "SELECT * from mydb.not_to_do_list where idnot_to_do_list = '" + id + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.getById = getById;
    function getByName(nombre) {
        var query = "SELECT idnot_to_do_list from mydb.not_to_do_list where nombre = '" + nombre + "'";
        var result = model_1.default.execQuery(query);
        return result;
    }
    NotToDoListService.getByName = getByName;
})(NotToDoListService || (NotToDoListService = {}));
exports.default = NotToDoListService;
