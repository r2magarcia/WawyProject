import React from "react";
import { Component } from "react";
import "./DiarioEmociones.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Card } from "react-bootstrap";
const { url } = require("../../config");

interface DiaryEntry {
  date: Date;
  emotion: Number;
  color: String;
}

interface calendarEvent {
    // this object will be "parsed" into an Event Object
    title: string,
    date: Date,
    color: string,
    display: string,
}
interface props {
  loggedUser: string;
}

interface state {
  records: Array<DiaryEntry>
}

export default class DiarioEmociones extends Component<props, state> {
  events: calendarEvent;

  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = { records: [] };
  }
  componentDidMount(){
    const request = new Request(`${url}/diary/sorted/${this.props.loggedUser}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      //body: '{"email": "srt6221@gmail.com"}',
    });
    fetch(request).then((resp) => resp.json().then((body) =>{      
      this.setState({ records: body })
      
      this.events = body.map((e : any)=>{
        
        return {
          title: "",
          date: Date.parse(e.fecha),
          color: e.color,
          display: "background",
        }
      })
      
    }))

  }

  render() {
    return (
      <><div className="calendar-container">
          <h2>Diario de emociones</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              laborum ea molestias consequuntur eos, natus, facere magni
              voluptatem, nulla dolores ipsum? Repellendus laboriosam animi
              blanditiis expedita rerum dolorem incidunt perspiciatis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        <div className="top-container">
          <div className="select-today">
            <Card>
            <Card.Body>
            <Card.Title> Ingresa tu estado de animo</Card.Title>
              <div className="form-emotion">
                <form action="">
                  <label htmlFor="emotion">Selecciona:</label>
                  <select id="emotion" name="emotion" defaultValue={0}>
                  <option value="0">----------</option>
                    <option value="volvo" style={{color:"blue"}}>Alegria</option>
                    <option value="saab">Tristeza</option>
                    <option value="fiat">Enojo</option>
                    <option value="audi">Preocupación</option>
                  </select>
                </form>
              </div>
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
            events={this.events} />
        </div>
      </div></>
    );
  }
}
