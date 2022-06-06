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
var NotToDoList = /** @class */ (function (_super) {
    __extends(NotToDoList, _super); /*implements ModelI*/
    function NotToDoList(nombre, idnot_to_do_list) {
        var _this = _super.call(this) || this;
        _this.idnot_to_do_list = null;
        if (idnot_to_do_list) {
            _this.idnot_to_do_list = idnot_to_do_list;
        }
        ;
        _this.nombre = nombre;
        return _this;
    }
    return NotToDoList;
}(model_1.default /*implements ModelI*/));
exports.default = NotToDoList;
