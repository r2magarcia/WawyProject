"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("./model"));
// import { ModelI } from '../interfaces/ModelI';
var User = /** @class */ (function (_super) {
    __extends(User, _super); /*implements ModelI*/
    function User(nombre, email, contrasena, active, idlist) {
        var _this = _super.call(this) || this;
        _this.idlist = null;
        if (idlist) {
            _this.idlist = idlist;
        }
        ;
        _this.nombre = nombre;
        _this.email = email;
        _this.contrasena = contrasena;
        _this.active = active;
        return _this;
    }
    return User;
}(model_1.default /*implements ModelI*/));
exports.default = User;
