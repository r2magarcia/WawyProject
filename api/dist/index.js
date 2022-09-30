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
var cors_1 = __importDefault(require("cors"));
var NotToDoListController = __importStar(require("./controllers/NotToDoListController"));
var UserController = __importStar(require("./controllers/UserController"));
var UserHasListController = __importStar(require("./controllers/User_NotToDoListController"));
var DiaryController = __importStar(require("./controllers/DairyController"));
var EstadoEController = __importStar(require("./controllers/EstadosEController"));
var AnswerController = __importStar(require("./controllers/AnswerController"));
var app = express_1.default();
var port = require("./config").port;
// TODO: Organizar las rutas para admin y requerir una key para acceder a los datos
// const options:cors.CorsOptions ={
//     methods: "GET, POST, PUT, DELETE", allowedHeaders: ["Pilots-key", "Teams-key"]
// };
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
/**
 * Only the Not to do list categories
 */
app
    .route("/ntdlcategories")
    .get(NotToDoListController.getAllNotes)
    //create a categorie for the Not to Do List
    .post(NotToDoListController.createNote);
app
    .route("/user")
    .get(UserController.getAllUsers)
    .post(UserController.createUser);
app.route("/user/filterBy/:filterBy").get(UserController.filterUserBy);
/**
 * Not to do list for each user
 */
app
    .route("/note")
    .get(UserHasListController.getAllNotes)
    .post(UserHasListController.createNote);
/**
 * Not to do list for an speceific user given an email
 */
app
    .route("/note/byuser/:email")
    .get(NotToDoListController.getAllUserNotes)
    .post(NotToDoListController.createNote);
app.route("/diary").post(DiaryController.createNote);
app.route("/diary/sorted/:email").get(DiaryController.getDiarySorted);
app.route("/emotion").get(EstadoEController.getAllEstados);
app.route("/answer/byUser/:id").get(AnswerController.filterAnswerByUser);
app.route("/login/:credentials").get(UserController.logIn);
app.route("/register").post(UserController.createUser);
// app.route('/diary')
// .get(DiaryController.getAllNotes)
// .post(DiaryController.createNote);
// app.route('/user/byid')
// .get(UserController.getIdByEmail);
app.listen(port, function () {
    console.log("Node JS Server started at port " + port);
});
