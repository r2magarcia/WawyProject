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

    const content = new Request(`${url}/bullet-journal/${props.loggedUser}`, {
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

        console.log(seguimientoMorning);
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
  };

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      notas: notas,
      user: props.loggedUser,
      seguimientoDiario: {
        morning: seguimientoMorning,
        afternoon: seguimientoAfternoon,
      },
      proyectoSemanal: proyectoSemanal,
      fecha: new Date(),
    };

    const content = new Request(`${url}/bullet-journal`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetch(content).then((resp) =>
      resp.json().then((body) => {
        console.log(body);
      })
    );
  };
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
                        <div className="proyecto-item" key={idxActividad}>
                          <Form.Control
                            type="text"
                            placeholder="Ingresa el nombre de la actividad"
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
                  <Button
                    variant="secondary"
                    onClick={(e) =>
                      setSeguimientoMorning([
                        ...seguimientoMorning,
                        {
                          name: "",
                          check: [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                          ],
                        },
                      ])
                    }
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="task-checkboxes">
                <Form.Label>Afternoon & Evening</Form.Label>
                <div className="task-category">
                  {seguimientoAfternoon.map(
                    (actividad: any, idxActividad: number) => (
                      <>
                        <div className="proyecto-item" key={idxActividad}>
                          <Form.Control
                            type="text"
                            placeholder="Ingresa el nombre de la actividad"
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
                  <Button
                    variant="secondary"
                    onClick={(e) =>
                      setSeguimientoAfternoon([
                        ...seguimientoAfternoon,
                        {
                          name: "",
                          check: [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                          ],
                        },
                      ])
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Proyectos Semanales</Form.Label>
              <div className="proyectos-wrapper task-category">
                {proyectoSemanal.map((proyecto: any, idx: number) => (
                  <>
                    <div className="proyecto-item" key={idx}>
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
                        placeholder="Ingresa el nombre de la actividad"
                        className="inline"
                        value={proyecto.name}
                        onChange={(e) => handleChangeProyectoNombre(e, idx)}
                      />
                    </div>
                  </>
                ))}
                <Button
                  variant="secondary"
                  onClick={(e) =>
                    setProyectoSemanal([
                      ...proyectoSemanal,
                      {
                        name: "",
                        check: false
                      },
                    ])
                  }
                >
                  +
                </Button>
              </div>
            </Form.Group>
            <Button  className="submit-journal" variant="primary" onClick={handleSubmit}>
              Guardar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

// {"morning":[{"name":"","check":[false,false,false,false,false,false,false]}],"afternoon":[{"name":"","check":[false,false,false,false,false,false,false]}]}

// [{"name":"test","status":true}]

// INSERT INTO `bulletjournal` (`id`, `notas`, `idUsuario`, `seguimientoDiario`, `proyectoSemanal`, `fecha`) VALUES (NULL, '', '', '{\"morning\":[{\"name\":\"\",\"check\":[false,false,false,false,false,false,false]}],\"afternoon\":[{\"name\":\"\",\"check\":[false,false,false,false,false,false,false]}]}', '[{\"name\":\"test\",\"status\":true}]', '2022-10-03 00:37:01.000000');
