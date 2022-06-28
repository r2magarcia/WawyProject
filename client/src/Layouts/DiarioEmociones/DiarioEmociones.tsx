import React from "react";
import { Component } from "react";
import "./DiarioEmociones.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Card, ListGroup } from "react-bootstrap";
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
  currentEmotion: number;

  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      records: [],
      estadosEmocionales: [],
    };
  }

  /**
   * do all the get request to fill the info with the user info from the database
   */
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

    const requestEstados = new Request(`${url}/emotion`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    fetch(requestEstados).then((resp) =>
      resp.json().then((body) => {
        let estados = body.map((e: any) => {
          return {
            value: e.id,
            label: e.nombre,
            color: e.color,
          };
        });

        this.setState({ estadosEmocionales: estados });
        console.log(this.state.estadosEmocionales);
      })
    );
  }

  handleChange(event: any) {
    this.currentEmotion = event.target.value || 0;
  }

  handleSubmit(event: { preventDefault: () => void }) {
    let data = {
      fecha: new Date(),
      idEmocion: this.currentEmotion,
      email: this.props.loggedUser,
    };
    this.submitToDatabase(data);
    event.preventDefault();
  }
  submitToDatabase(data: any) {
    const request = new Request(`${url}/diary`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetch(request).then((resp) =>
      resp.json().then((body) => {
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

          <Card style={{ width: "26rem" }}>
            <Card.Body>
              <Card.Title> ¿Cómo te sentiste hoy? </Card.Title>
              <div className="form-emotion">
                <form action="">
                  <select onChange={(e) => this.handleChange(e)}>
                    {this.state.estadosEmocionales.map((option, idx) => (
                      <option key={idx} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <button onClick={(e) => this.handleSubmit(e)}>
                    Ingresar
                  </button>
                </form>
              </div>
            </Card.Body>
          </Card>

          <div className="diary-container">
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
            <div className="color-meaning">
              <Card.Title>
                {" "}
                Te voy a explicar el significado de los colores:{" "}
              </Card.Title>
              <ListGroup>
                {this.state.estadosEmocionales.map((estado, idx) => (
                  <ListGroup.Item
                    key={idx}
                    style={{ backgroundColor: estado.color + 70 }}
                  >
                    {estado.label}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </div>
      </>
    );
  }
}
