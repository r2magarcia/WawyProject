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
exports.logIn = exports.sendHelp = exports.getIdByEmail = exports.filterUserBy = exports.createUser = exports.getAllUsers = void 0;
var UserService_1 = __importDefault(require("../services/UserService"));
var UserModel_1 = __importDefault(require("../models/UserModel"));
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UserService_1.default.getAllUsers()];
                case 1:
                    users = _a.sent();
                    res.status(201).json(users);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getAllUsers = getAllUsers;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = new UserModel_1.default(req.body.nombre, req.body.email, req.body.contrasena, req.body.active);
                    console.log(user);
                    return [4 /*yield*/, UserService_1.default.insertUser(user.email, user.contrasena, user.active, user.nombre)];
                case 1:
                    response = _a.sent();
                    res.status(201).json(response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.createUser = createUser;
function filterUserBy(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UserService_1.default.filterUsers(req.params.filterBy)];
                case 1:
                    response = _a.sent();
                    res.status(201).json(response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.filterUserBy = filterUserBy;
function getIdByEmail(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("get all Users controller");
                    email = req.params.email;
                    return [4 /*yield*/, UserService_1.default.getIdByEmail(email)];
                case 1:
                    users = _a.sent();
                    console.log(users);
                    res.status(201).json(users);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getIdByEmail = getIdByEmail;
function sendHelp(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UserService_1.default.insertHelp(req.params.email)];
                case 1:
                    response = _a.sent();
                    res.status(201).json(response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.sendHelp = sendHelp;
function logIn(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var cred, email, pass, user, admin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.params);
                    cred = req.params.credentials.split("*", 2);
                    email = cred[0];
                    pass = cred[1];
                    return [4 /*yield*/, UserService_1.default.getUser(email, pass)];
                case 1:
                    user = _a.sent();
                    if (!(user.length != 0)) return [3 /*break*/, 2];
                    res.status(201).json(user);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, UserService_1.default.getAdmin(email, pass)];
                case 3:
                    admin = _a.sent();
                    if (admin.length != 0) {
                        res.status(201).json({
                            userType: "Admin"
                        });
                    }
                    else {
                        res.status(403).json(admin);
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.logIn = logIn;
