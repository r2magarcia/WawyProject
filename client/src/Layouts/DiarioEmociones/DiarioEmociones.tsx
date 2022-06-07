import React from "react";
import { Component } from "react";
import "./DiarioEmociones.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Card, ListGroup } from "react-bootstrap";
const { url } = require("../../config");

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
    this.state = { records: [], estadosEmocionales: []};
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
        

        let estados = body.map((e: any) => {
          return {
            title: e.nombre,
            color: e.color,
          };
        });

        this.setState({ estadosEmocionales: estados });
      })
    );

    
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

          <div className="top-container">
            <div className="select-today">
              <Card>
                <Card.Body>
                  <Card.Title> ¿Cómo te sentiste hoy? </Card.Title>
                  <div className="form-emotion">
                    <form action="">
                      <select id="emotion" name="emotion" defaultValue={0}>
                        <option value="0">----------</option>
                        <option value="volvo" style={{ color: "blue" }}>
                          Alegria
                        </option>
                        <option value="saab">Tristeza</option>
                        <option value="fiat">Enojo</option>
                        <option value="audi">Preocupación</option>
                      </select>
                    </form>
                  </div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title> Te voy a explicar el significado de los colores: </Card.Title>
                  <ListGroup>
                    {this.state.estadosEmocionales.map(estado =>
                      <ListGroup.Item style={{backgroundColor: estado.color}}>{estado.nombre}</ListGroup.Item>
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
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
      </>
    );
  }
}
