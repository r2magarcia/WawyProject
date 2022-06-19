import React from "react";
import { Component } from "react";
import "./DiarioEmociones.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button, Card, Dropdown, DropdownButton, ListGroup } from "react-bootstrap";
const { url } = require("../../config");

interface InputWrapperProps {
  children?: React.ReactNode;
}

interface DiaryEntry {
  date: Date;
  emotion: Number;
  color: String;
}

interface calendarEvent {
  // this object will be "parsed" into an Event Object
  title: string;
  date: Date;
  color: string;
  display: string;
}
interface props {
  loggedUser: string;
}

interface state {
  records: Array<DiaryEntry>;
  estadosEmocionales: Array<any>;
}

export default class DiarioEmociones extends Component<props, state> {
  events: calendarEvent;

  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      records: [],
      estadosEmocionales: [
        {
          title: "Me sentí feliz",
          color: "#0DF205",
        },
        {
          title: "Me sentí tranquilo o tranquila",
          color: "#EE05F2",
        },
        {
          title: "Me sentí enojado o enojada ",
          color: "#F20505",
        },
        {
          title: "Me senti aburrido o aburrida",
          color: "#F2E205",
        },
        {
          title: "Me sentí con bajones emocionales",
          color: "#05F2DB",
        },
        {
          title: "Me sentí inseguro o insegura",
          color: "#B7B7B7",
        },
        // {
        //   title: "Me senti con desaliento",
        //   color: "#000000",
        // },
      ],
    };
  }

  componentDidMount() {
    const request = new Request(
      `${url}/diary/sorted/${this.props.loggedUser}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        //body: '{"email": "srt6221@gmail.com"}',
      }
    );
    fetch(request).then((resp) =>
      resp.json().then((body) => {
        this.setState({ records: body });

        this.events = body.map((e: any) => {
          return {
            title: "",
            date: Date.parse(e.fecha),
            color: e.color,
            display: "background",
          };
        });
      })
    );
    /*
    const requestEstados = new Request(
      `${url}/emotion`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        //body: '{"email": "srt6221@gmail.com"}',
      }
    );
    fetch(request).then((resp) =>
      resp.json().then((body) => {
        

        /*let estados = body.map((e: any) => {
          return {
            title: e.nombre,
            color: e.color,
          };
        });
        let estadosMock: Array<any> = 
          [{
            title: "Me sentí feliz",
            color: "#0DF205",
          },
          {
            title: "Me sentí tranquilo o tranquila",
            color: "#EE05F2",
          },
          {
            title: "Me sentí enojado o enojada ",
            color: "#F20505",
          },
          {
            title: "Me senti aburrido o aburrida",
            color: "#EE05F2",
          },
          {
            title: "Me sentí con bajones emocionales",
            color: "#05F2DB",
          },
          {
            title: "Me sentí inseguro o insegura",
            color: "#B7B7B7",
          },
          {
            title: "Me senti con desaliento",
            color: "#000000",
          },
        ]
        
        this.setState({ estadosEmocionales: estadosMock });
        console.log(this.state.estadosEmocionales);
        
     /* })
    );
*/
  }

  render() {
    return (
      <>
        <div className="calendar-container">
          <h2>Diario de emociones</h2>
          <p>
            Hey, en el diario de emociones consiste en ponerle color a las
            casillas que representan nuestros días, a finalizar la semana te
            daremos un resumen de cómo estuviste emocionalmente, recuerda que
            soy un acompañamiento virtual y te recomendamos buscar un
            profesional en la salud mental, para hablar sobre lo que sientes.
          </p>
          <p>
            Recuerda que el primer paso para gestionar nuestras emociones, es
            darnos cuenta de ellas.
          </p>
          <div className="content-container">
          <div className="top-container">
            <div className="cards">
              <Card>
                <Card.Body>
                  <Card.Title> ¿Cómo te sentiste hoy? </Card.Title>
                  <div className="form-emotion">
                    <form action="">
                      <select name="emotion" id="emotion">
                      <option>Me sentí feliz </option>
                        <option>
                          Me sentí tranquilo o tranquila{" "}
                        </option>
                        <option>
                          Me sentí enojado o enojada{" "}
                        </option>
                        <option>
                          Me senti aburrido o aburrida{" "}
                        </option>
                        <option>
                          Me sentí con bajones emocionales{" "}
                        </option>
                        <option>
                          Me sentí inseguro o insegura{" "}
                        </option>
                        <option>
                          Me sentí enojado o enojada{" "}
                        </option>
                        <option>
                          Me senti con desaliento{" "}
                        </option>
                      </select>
                      <Button variant="primary">Ingresar</Button>{' '}
                    </form>
                  </div>
                </Card.Body>
              </Card>
              <div className="color-meaning">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      Te voy a explicar el significado de los colores:{" "}
                    </Card.Title>
                    <ListGroup>
                      {this.state.estadosEmocionales.map((estado) => (
                        <ListGroup.Item
                          style={{ backgroundColor: estado.color }}
                        >
                          {estado.title}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="select-today"></div>
            {/* <div className="color-table">
            <ul>
              <li>color1</li>
              <li>color2</li>
              <li>color3</li>
            </ul>
          </div> */}
          </div>

          <div className="calendar">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              locale={"es"}
              defaultAllDay={true}
              navLinks={false}
              events={this.events}
            />
          </div>
        </div>
        </div>
      </>
    );
  }
}
