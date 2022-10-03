import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { url } from "../../../config";
import "./WizardDiagnostico.css";

export default function WizardDiagnostico() {
  const [opciones, setOpciones] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const content = new Request(`${url}/question`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    fetch(content).then((resp) =>
      resp.json().then((body) => {

        setOpciones(body);

        let opcionesaux = body.map((e:any)=>{
          let aux:any = {};
          aux.pregunta = e.id;
          aux.respuesta = -1;
          return aux;
        });

        setSelected(opcionesaux);
      })
    );
  }, []);

  const handleChange = (event: any, idx: number) => {
    event?.preventDefault();
    let aux= selected;
    aux[selected.findIndex(e => e.pregunta === idx)].respuesta  = event.target.value;
    setSelected(aux);
  }

  const handleChangeName = (event: any) => {
    event?.preventDefault();
    setNombre(event.target.value);
    console.log(nombre);
    
  }

  const handleSubmit = (event: any) => {
    event?.preventDefault();

    console.log(selected);
    console.log( JSON.stringify({nombre: nombre, preguntas: selected}));
    const data = {nombre: nombre, preguntas: selected};

    const submitRequest = new Request(`${url}/diagnostico`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    console.log(submitRequest);
    
    fetch(submitRequest).then((resp) =>
      resp.json().then((body) => {
        console.log(body);
      })
    );
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre del diagnostico</Form.Label>
        <Form.Control onChange={(e) => handleChangeName(e)} type="text" placeholder="Ex: ansiedad" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      {opciones.map((pregunta, idx) => (
        // <Card key={idx} className="card-pregunta">
          <Form.Group key={idx} className="mb-3">
            <Form.Label>{pregunta.valor}</Form.Label>
            <Container fluid="md">
              <Form.Select onChange={(e) => handleChange(e, pregunta.id)}>
                <option value="-1">Selecciona una opcion</option>
                {JSON.parse(pregunta.respuestas).map((opc: any, idx: number) => (
                  <option value={idx}>{opc}</option>
                ))}
              </Form.Select>
            </Container>
          </Form.Group>
        // </Card>
      ))}

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="button" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </>
  );
}
