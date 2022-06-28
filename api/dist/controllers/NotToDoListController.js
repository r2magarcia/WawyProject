"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserNotes = exports.createNote = exports.getAllNotes = void 0;
var NotToDoListService_1 = __importDefault(require("../services/NotToDoListService"));
var User_NotToDoListService_1 = __importDefault(require("../services/User_NotToDoListService"));
var UserService_1 = __importDefault(require("../services/UserService"));
function getAllNotes(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var notes, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, NotToDoListService_1.default.getAllNotes()];
                case 1:
                    notes = _a.sent();
                    res.status(201).json(notes);
                    console.log(notes);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    res.status(400).json({ error: "Algo salio mal" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllNotes = getAllNotes;
function createNote(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, NotToDoListService_1.default.insertNote(req.body.contenido, req.body.categoria, req.body.nombre)];
                case 1:
                    _ = _a.sent();
                    res.status(201).json();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    res.status(400).json({ error: "Algo salio mal" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createNote = createNote;
function getAllUserNotes(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var line, users, user, categorys, noteResponse, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("get all line from user controller");
                    line = req.params.email;
                    console.log(line);
                    return [4 /*yield*/, UserService_1.default.getIdByEmail(line)];
                case 1:
                    users = _a.sent();
                    user = users[0].idusuario || 0;
                    return [4 /*yield*/, NotToDoListService_1.default.getById(user)];
                case 2:
                    categorys = _a.sent();
                    return [4 /*yield*/, User_NotToDoListService_1.default.getAllUserHasList()];
                case 3:
                    noteResponse = _a.sent();
                    response = [];
                    categorys.map(function (e) {
                        console.log("category text");
                        console.log(e);
                        // console.log(e.not_to_do_list_idnot_to_do_list);
                        response.push({
                            title: e.nombre,
                            content: noteResponse.filter(function (el) {
                                if (el.id == e.idnot_to_do_list) {
                                    return el.nombre;
                                }
                            }).map(function (e) { return e.nombre; })
                        });
                    });
                    console.log("response not to do list");
                    console.log(response);
                    res.status(200).json(response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getAllUserNotes = getAllUserNotes;
