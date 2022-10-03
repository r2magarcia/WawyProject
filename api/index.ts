import express, { request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as NotToDoListController from "./controllers/NotToDoListController";
import * as UserController from "./controllers/UserController";
import * as UserHasListController from "./controllers/User_NotToDoListController";
import * as DiaryController from "./controllers/DairyController";
import * as EstadoEController from "./controllers/EstadosEController";
import * as AnswerController from "./controllers/AnswerController";
import * as QuestionController from "./controllers/QuestionController";
import * as JournalController from "./controllers/JournalController";
import * as DiagnosticoController from "./controllers/DiagnosticoController";

const app = express();
const { port } = require("./config");

// TODO: Organizar las rutas para admin y requerir una key para acceder a los datos

// const options:cors.CorsOptions ={
//     methods: "GET, POST, PUT, DELETE", allowedHeaders: ["Pilots-key", "Teams-key"]
// };
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.route("/user/helpMe/:email").post(UserController.sendHelp);

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

app.route("/question").get(QuestionController.getAllQuestions);

app.route("/journal").post(JournalController.insertEntry);

app.route("/diagnostico").post(DiagnosticoController.insertEntry).get(DiagnosticoController.getAllDiagnosis);

app.route("/bullet-journal").post(JournalController.insertEntry);

app.route("/bullet-journal/:email").get(JournalController.getEntries);
app.route("/assignDiagnosis").get(DiagnosticoController.asignDiagnosis);

// app.route('/diary')
// .get(DiaryController.getAllNotes)
// .post(DiaryController.createNote);
// app.route('/user/byid')
// .get(UserController.getIdByEmail);

app.listen(port, () => {
  console.log(`Node JS Server started at port ${port}`);
});
