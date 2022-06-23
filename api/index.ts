import express, { request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as wawycontroller from "./controllers/wawycontroller";
import * as NotToDoListController from "./controllers/NotToDoListController";
import * as UserController from "./controllers/UserController";
import * as UserHasListService from "./controllers/User_NotToDoListController";
import * as DiaryController from "./controllers/DairyController";

const app = express();
const {port} = require('./config');

// const options:cors.CorsOptions ={
//     methods: "GET, POST, PUT, DELETE", allowedHeaders: ["Wawy-key"]
// };
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.route('/note/byuser/:email')
.get(UserHasListService.getAllUserNotes);
app.route('/diary')
.get(DiaryController.getAllNotes)
.post(DiaryController.createNote);
app.route('/diary/sorted/:email')
.get(DiaryController.getDiarySorted);

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});