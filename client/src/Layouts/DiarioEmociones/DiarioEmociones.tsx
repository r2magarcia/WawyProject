import React from "react";
import { Component } from "react";
import "./DiarioEmociones.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Card } from "react-bootstrap";

interface DiaryEntry {
  date: Date;
  emotion: Number;
  color: String;
}

export default class DiarioEmociones extends Component {
  formatDatesByWeek() {
    this.records.map((e) => {});
  }
  records: Array<DiaryEntry> = [
    {
      date: new Date(new Date(2022, 5, 5)),
      emotion: 1,
      color: "#FF0000",
    },
    {
      date: new Date(new Date(2022, 5, 6)),
      emotion: 1,
      color: "#FF0000",
    },
    {
      date: new Date(new Date(2022, 5, 7)),
      emotion: 1,
      color: "#FF0000",
    },
    {
      date: new Date(new Date(2022, 5, 8)),
      emotion: 1,
      color: "#FF0000",
    },
    {
      date: new Date(new Date(2022, 5, 10)),
      emotion: 1,
      color: "#00FF00",
    },
  ];

  render() {
    return (
      <div className="calendar-container">
        <div className="top-container">
        <div className="select-today">
          <Card>
            <div className="form-emotion">
              <form action="">
              <label htmlFor="emotion">Choose a car:</label>
              <select id="emotion" name="emotion">
                <option value="volvo">Alegria</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
              </form>
            </div>
          </Card>
        </div>
        <div className="color-table">
          <ul>
            <li>color1</li>
            <li>color2</li>
            <li>color3</li>
          </ul>
        </div>
        </div>

        <div className="calendar">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale={"es"}
            defaultAllDay={true}
            navLinks={false}
            events={[
              {
                // this object will be "parsed" into an Event Object
                title: "", // a property!
                start: "2022-06-01", // a property!
                end: "2022-06-01", // a property! ** see important note below about 'end' **
                color: "#FF00FF",
                display: "background",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
