"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var wawycontroller = __importStar(require("./controllers/wawycontroller"));
var NotToDoListController = __importStar(require("./controllers/NotToDoListController"));
var UserController = __importStar(require("./controllers/UserController"));
var UserHasListService = __importStar(require("./controllers/User_NotToDoListController"));
var DiaryController = __importStar(require("./controllers/DairyController"));
var app = express_1.default();
var port = require('./config').port;
// const options:cors.CorsOptions ={
//     methods: "GET, POST, PUT, DELETE", allowedHeaders: ["Pilots-key", "Teams-key"]
// };
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.route('/wawy')
    .get(wawycontroller.getAllPilots);
app.route('/nottodolist')
    .get(NotToDoListController.getAllNotes)
    .post(NotToDoListController.createNote);
app.route('/user')
    .get(UserController.getAllUsers)
    .post(UserController.createUser);
// app.route('/user/byid')
// .get(UserController.getIdByEmail);
app.route('/note')
    .get(UserHasListService.getAllNotes)
    .post(UserHasListService.createNote);
app.route('/note/byuser')
    .get(UserHasListService.getAllUserNotes);
app.route('/diary')
    .get(DiaryController.getAllNotes)
    .post(DiaryController.createNote);
app.route('/diary/sorted')
    .get(DiaryController.getDiarySorted);
app.listen(port, function () {
    console.log("Node JS Server started at port " + port);
});
