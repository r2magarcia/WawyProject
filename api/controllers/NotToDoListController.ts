import { Request, Response, response } from "express";
import listService from "../services/NotToDoListService";
import UserHasListService from "../services/User_NotToDoListService";
import UserService from "../services/UserService";
import NotToDoList from "../models/NotToDoListModel";
import User from "../models/UserModel";
import User_NotToDoList from "../models/User_NotToDoListModel";

export async function getAllNotes(req: Request, res: Response) {
  try {
    const notes: Array<NotToDoList> = await listService.getAllNotes();
    res.status(201).json(notes);
    console.log(notes);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Algo salio mal" });
  }
}

export async function createNote(req: Request, res: Response) {
  try {
    const const1 = await listService.deleteNotesFromUser(req.params.email);
    const const2 = await listService.insertNotes(req.body, req.params.email);
    console.log("createNote");
    console.log(req.body);

    res.status(201).json();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Algo salio mal" });
  }
}

export async function getAllUserNotes(req: Request, res: Response) {
  console.log("get all line from user controller");
  const line: string = req.params.email;

  const categories: Array<NotToDoList> = await listService.getAllNotes();
  const noteResponse: Array<User_NotToDoList> =
    await UserHasListService.getAllUserHasList(line);
  console.log("--------------------------------------------------");

  console.log(categories);
  // console.log(noteResponse);

  let response: Array<any> = categories;

  response = categories.map((category) => {
    return {
      id: category.id,
      title: category.nombre,
      contenido: noteResponse
        .map((note) => {
          if (category.id == note.idCategoria) {
            return note.contenido;
          }
        })
        .filter((e) => e != null),
    };
  });
  console.log(response);

  console.log(JSON.stringify(response));

  res.status(200).json(response);
}
