import { Request, Response, response } from "express";
import DiagnosticoService from "../services/DiagnosticoService";
import PreguntaService from "../services/PreguntaService";

export async function insertEntry(req: Request, res: Response) {
  console.log("diagnostico----------------------------------------------");
  const preguntas = await PreguntaService.getAllPreguntas();

  let query: string = ``;
  const preguntas2 = req.body.preguntas
    .filter((e: any) => e.respuesta >= 0)
    .map((qa: any) => {
      const index = preguntas.findIndex((e: any) => qa.pregunta == e.id);

      qa.pregunta = preguntas[index].valor;
      qa.respuesta = JSON.parse(preguntas[index].respuestas)[
        Number(qa.respuesta)
      ];
      return qa;
    });

  preguntas2.forEach((element: any) => {
    query += `(SELECT idusuario FROM respuestas WHERE pregunta = \\'${element.pregunta}\\' AND respuesta = \\'${element.respuesta}\\') INTERSECT `;
  });

  query = query.slice(0, -10);

  console.log(query);
  const _ = await DiagnosticoService.insertEntry(query, req.body.nombre);

  res.status(201).json();
}

export async function asignDiagnosis(req: Request, res: Response) {
  const diagnosticos = await DiagnosticoService.getDiagnosticos();
  diagnosticos.map(async (diagnostico: any) => {
    const assignedDiagnosis = await DiagnosticoService.getUsersByDiagnosis(
      diagnostico
    );
    console.log("------------");
    console.log(diagnostico);
    console.log(assignedDiagnosis);
    const _ = DiagnosticoService.insertDiagnosisForUser(
      diagnostico.id,
      assignedDiagnosis
    );
  });

  console.log("diagnosticos");
  return res.status(201);
}

export async function getAllDiagnosis(req: Request, res: Response) {
  const result = await DiagnosticoService.getDiagnosticosForUsers();
  console.log(result);
  
  return res.status(200).json(result);
}

//SELECT respuestas.idusuario FROM respuestas JOIN usuarios ON respuestas.idusuario = usuarios.idusuario WHERE ( (respuestas.pregunta = '¿En qué universidad?' AND respuestas.respuesta = 'USB') OR (respuestas.pregunta = 'Imagenes de como se a sentido ultimamente' AND respuestas.respuesta = 'ahogo') ) HAVING COUNT(*) = 2;
