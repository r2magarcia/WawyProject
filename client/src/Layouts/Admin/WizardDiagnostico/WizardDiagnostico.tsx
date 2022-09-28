import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { url } from "../../../config";
import "./WizardDiagnostico.css";

export default function WizardDiagnostico() {
  const [opciones, setOpciones] = useState<any[]>([]);

  useEffect(() => {
    const content = new Request(`${url}/question`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    fetch(content).then((resp) =>
      resp.json().then((body) => {
        console.log(body);
        
        setOpciones(body)
        console.log(JSON.parse(body[0].respuestas));
        
      })
    );
  }, []);

  return (
    <>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del diagnostico</Form.Label>
          <Form.Control type="text" placeholder="Ex: ansiedad" />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
        {opciones.map((e, idx) => 
          <Card key={idx} className="card-pregunta">
            <Form.Group className="mb-3">
              <Form.Label>{e.valor}

              </Form.Label>
              <Container fluid="md">
              <Form.Select>
              <option  value="">Selecciona una opcion</option>
                {JSON.parse(e.respuestas).map((opc: any) => 
                <option value={opc}>{opc}</option>
                  )}
                
              </Form.Select>
              </Container>

            </Form.Group>
          </Card>
        )}

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="primary" type="button">
          Submit
        </Button>

    </>
  );
}
