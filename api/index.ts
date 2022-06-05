import express, { request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
//import * as wawycontroller from "./controllers/wawycontroller";
import * as NotToDoListController from "./controllers/NotToDoListController"
import * as UserController from "./controllers/UserController"

const app = express();
const {port} = require('./config');

// const options:cors.CorsOptions ={
//     methods: "GET, POST, PUT, DELETE", allowedHeaders: ["Pilots-key", "Teams-key"]
// };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/wawy')
//.get(wawycontroller.getAllPilots);
app.route('/nottodolist')
.get(NotToDoListController.getAllNotes)
.post(NotToDoListController.createNote);
app.route('/user')
.get(UserController.getAllUsers)
.post(UserController.createUser);

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});