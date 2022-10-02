import React, { useEffect, useState } from "react";
import "./Journal.css";
import { Button, Card, Form } from "react-bootstrap";
import { url } from "../../../../config";

export default function Journal(props: { loggedUser: any }) {
  const [notas, setNotas] = useState("");
  const [seguimientoMorning, setSeguimientoMorning] = useState<any[]>([
    { name: "", check: [false, false, false, false, false, false, false] },
  ]);
  const [seguimientoAfternoon, setSeguimientoAfternoon] = useState<any[]>([
    { name: "", check: [false, false, false, false, false, false, false] },
  ]);
  const [proyectoSemanal, setProyectoSemanal] = useState<any[]>([
    { name: "test", status: true },
  ]);
  const [fecha, setFecha] = useState(new Date().toJSON().slice(0, 10));

  const handleChangeNotas = (event: any) => {
    console.log("handleChangeNotas");

    event?.preventDefault();
    setNotas(event.target.value);
  };

  useEffect(() => {
    console.log("id", `${url}/bullet-journal/${props.loggedUser}`);

    const content = new Request(`${url}/answer/${props.loggedUser}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    fetch(content).then((resp) =>
      resp.json().then((body) => {
        console.log(body);
        setNotas(body.notas);
        setSeguimientoMorning(JSON.parse(body.seguimientoDiario).morning);
        setSeguimientoAfternoon(JSON.parse(body.seguimientoDiario).afternoon);
        setProyectoSemanal(JSON.parse(body.proyectoSemanal));
      })
    );
  }, [props]);

  const handleChangeMorningName = (e: any, idxActividad: number) => {
    e?.preventDefault();
    let aux = [...seguimientoMorning];
    aux[idxActividad].name = e.target.value;
    console.log(aux[idxActividad]);
    setSeguimientoMorning(aux);
    console.log(seguimientoMorning);
  };

  const handleChangeMorningCheckBox = (
    e: any,
    idxActividad: number,
    idxCheckbox: number
  ) => {
    e?.preventDefault();
    let aux = [...seguimientoMorning];
    console.log(aux);
    
    let aux2 = [...seguimientoMorning[idxActividad].check];
    console.log(aux2);
    
    aux2[idxCheckbox] = !aux2[idxCheckbox];
    aux[idxActividad].check = aux2;
    console.log(aux);
    
    setSeguimientoMorning(aux);
  };

  const handleChangeAfternoonName = (e: any, idxActividad: number) => {
    e?.preventDefault();
    let aux = [...seguimientoAfternoon];
    aux[idxActividad].name = e.target.value;
    setSeguimientoAfternoon(aux);
  };

  const handleChangeAfternoonCheckBox = (
    e: any,
    idxActividad: number,
    idxCheckbox: number
  ) => {
    e?.preventDefault();
    let aux = [...seguimientoAfternoon];
    console.log(aux);
    
    let aux2 = [...seguimientoAfternoon[idxActividad].check];
    console.log(aux2);
    
    aux2[idxCheckbox] = !aux2[idxCheckbox];
    aux[idxActividad].check = aux2;
    console.log(aux);
    
    setSeguimientoAfternoon(aux);
  }

  const handleChangeProyectoStatus = (e: any, idxProyecto: number) => {
    e?.preventDefault();
    let aux = [...proyectoSemanal];
    aux[idxProyecto].status = !aux[idxProyecto].status;
    setProyectoSemanal(aux);
  };
  const handleChangeProyectoNombre = (e: any, idxProyecto: number) => {
    e?.preventDefault();
    let aux = [...proyectoSemanal];
    aux[idxProyecto].name = e.target.value;
    setProyectoSemanal(aux);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
  }
  return (
    <>
      <Card className="card-bullet-journal">
        <Card.Body>
          <Form>
            
            <div className="top-card-container">
              <div>
                <Card.Title>Tareas diarias y semanales</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {fecha}
                </Card.Subtitle>
              </div>
              <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Notas</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={notas}
                    aria-label="With textarea"
                    onChange={handleChangeNotas}
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3 daily-tasks">
              <div className="task-checkboxes">
                <Form.Label>Morning</Form.Label>
                <div className="task-category">
                  {seguimientoMorning.map(
                    (actividad: any, idxActividad: number) => (
                      <>
                        <div key={idxActividad}>
                          <Form.Control
                            type="text"
                            placeholder="Readonly input here..."
                            className="inline"
                            value={actividad.name}
                            onChange={(e) =>
                              handleChangeMorningName(e, idxActividad)
                            }
                          />
                          <div className="checkboxes-container">
                            {actividad.check.map(
                              (checkBox: boolean, idxCheckbox: number) => (
                                <Form.Check
                                  inline
                                  key={idxCheckbox}
                                  type="checkbox"
                                  checked={checkBox}
                                  aria-label={`default checkbox`}
                                  onChange={(e) =>
                                    handleChangeMorningCheckBox(
                                      e,
                                      idxActividad,
                                      idxCheckbox
                                    )
                                  }
                                />
                              )
                            )}
                          </div>
                        </div>
                      </>
                    )
                  )}
                </div>
              </div>

              <div className="task-checkboxes">
                <Form.Label>Afternoon & Evening</Form.Label>
                <div className="task-category">
                  {seguimientoAfternoon.map(
                    (actividad: any, idxActividad: number) => (
                      <>
                        <div key={idxActividad}>
                          <Form.Control
                            type="text"
                            placeholder="Readonly input here..."
                            className="inline"
                            value={actividad.name}
                            onChange={(e) =>
                              handleChangeAfternoonName(e, idxActividad)
                            }
                          />
                          <div className="checkboxes-container">
                            {actividad.check.map(
                              (checkBox: boolean, idxCheckbox: number) => (
                                <Form.Check
                                  inline
                                  key={idxCheckbox}
                                  type="checkbox"
                                  checked={checkBox}
                                  aria-label={`default checkbox`}
                                  onChange={(e) =>
                                    handleChangeAfternoonCheckBox(
                                      e,
                                      idxActividad,
                                      idxCheckbox
                                    )
                                  }
                                />
                              )
                            )}
                          </div>
                        </div>
                      </>
                    )
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Proyectos Semanales</Form.Label>
              <div className="proyectos-wrapper">
                {proyectoSemanal.map((proyecto: any, idx: number) => (
                  <>
                    <div key={idx}>
                      <Form.Check
                        inline
                        type="checkbox"
                        id={`default-checkbox`}
                        aria-label={`default checkbox`}
                        checked={proyecto.status}
                        onChange={(e) => handleChangeProyectoStatus(e, idx)}
                      />
                      <Form.Control
                        type="text"
                        placeholder="Readonly input here..."
                        className="inline"
                        value={proyecto.name}
                        onChange={(e) => handleChangeProyectoNombre(e, idx)}
                      />
                    </div>
                  </>
                ))}
              </div>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
          </Form>
          
        </Card.Body>
      </Card>
    </>
  );
}

// {"morning":[{"name":"","check":[false,false,false,false,false,false,false]}],"afternoon":[{"name":"","check":[false,false,false,false,false,false,false]}]}

// [{"name":"test","status":true}]


// INSERT INTO `bulletjournal` (`id`, `notas`, `idUsuario`, `seguimientoDiario`, `proyectoSemanal`, `fecha`) VALUES (NULL, '', '', '{\"morning\":[{\"name\":\"\",\"check\":[false,false,false,false,false,false,false]}],\"afternoon\":[{\"name\":\"\",\"check\":[false,false,false,false,false,false,false]}]}', '[{\"name\":\"test\",\"status\":true}]', '2022-10-03 00:37:01.000000');