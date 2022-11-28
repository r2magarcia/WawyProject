import React from "react";
import { Component } from "react";
import "./DiarioEmociones.scss";
import { Card, ListGroup } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { url } from "../../../config";
import moment from "moment";
require("moment/locale/es.js");

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
  records: Array<any>;
  estadosEmocionales: Array<any>;
}

export default class DiarioEmociones extends Component<props, state> {
  events: any;
  currentEmotion: number;
  localizer: any;
  eventStyleGetter: any;
  constructor(props: props | Readonly<props>) {
    super(props);
    this.localizer = momentLocalizer(moment);
    this.state = {
      records: [],
      estadosEmocionales: [],
    };
    this.eventStyleGetter = function (
      event: any,
      start: any,
      end: any,
      isSelected: any
    ) {
      let newStyle = {
        backgroundColor: event.color?.color || event.color,
      };

      return { style: newStyle };
    };

    if (this.props.loggedUser == null)
      window.location = `/login` as unknown as Location;
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
        console.log(body);

        this.events = body.map((e: any, idx: number) => {
          return {
            title: "",
            start: Date.parse(e.fecha) - 18000000,
            end: Date.parse(e.fecha) - 179999900,
            color: e.color,
            allDay: false,
          };
        });

        this.setState({ records: this.events });
        console.log(this.state.records);
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
      })
    );
  }

  handleChange(event: any) {
    event.preventDefault();
    this.currentEmotion = event.target.value || 0;
  }

  handleSubmit(event: any) {
    event.preventDefault();
    let data = {
      fecha: new Date(),
      idEmocion: this.currentEmotion,
      email: this.props.loggedUser,
    };
    let eventToPush = {
      id: this.state.records.length,
      title: "",
      start: new Date(),
      end: new Date(),
      color: this.state.estadosEmocionales[this.currentEmotion],
    };
    let eventRecords = this.state.records;
    eventRecords.push(eventToPush);

    this.setState({ records: eventRecords });
    this.submitToDatabase(data);
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
    fetch(request).then((resp) => resp.json().then((body) => {}));
  }

  render() {
    var session = localStorage.getItem("email") != null;
    if(!session){
      window.location = `/login` as unknown as Location;
    };
    return (
      session && (
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
                    <select
                      className="select-emotion"
                      onChange={(e) => this.handleChange(e)}
                    >
                      <option value="default" selected disabled hidden>
                        Selecciona aqui
                      </option>
                      {this.state.estadosEmocionales.map((option, idx) => (
                        <option key={idx} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <button
                      className="btn-ingresarEstado"
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Ingresar
                    </button>
                  </form>
                </div>
              </Card.Body>
            </Card>

            <div className="diary-container">
              <div className="calendar-container">
                <Calendar
                  localizer={this.localizer}
                  events={this.state.records}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  eventPropGetter={this.eventStyleGetter}
                  views={["month"]}
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
      )
    );
  }
}
