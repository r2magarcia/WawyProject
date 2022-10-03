import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Chat from "./Chat/Chat";
import DiarioEmociones from "./DiarioEmociones/DiarioEmociones";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";
import NotToDoList from "./NotToDoList/NotToDoList";
import BulletJournal from "./BulletJournal/BulletJournal";
import "./AppContent.css";
import Journal from "./BulletJournal/Journal/Journal";
interface props {
}
export default class AppContent extends Component {
  email: string;
  constructor(props: props) {
    super(props);
    this.email =  String(localStorage.getItem('email'));
  } 
  render() {
    return (
      <>
        <NavBar items={[
              { title: "Diario de Emociones", link: "/diario-de-emociones" },
              { title: "Not to do list", link: "/not-to-do-list" },
              { title: "Bullet Journal", link: "bullet-journal" },
            ]}></NavBar>
        <Container fluid="lg">
          <Row>
            <div className="app-container">
              <Routes>
                <Route
                  path="/not-to-do-list"
                  element={<NotToDoList loggedUser={this.email} />}
                ></Route>
                <Route path="/"
                  element={<Home />}
                ></Route>
                <Route
                  path="/diario-de-emociones"
                  element={<DiarioEmociones loggedUser={this.email} />}
                ></Route>
                <Route
                  path="/bullet-journal"
                  element={<Journal loggedUser={this.email}/>}
                ></Route>
                <Route
                  path="/login"
                  element={<Login />}
                ></Route>
                <Route
                  path="/register"
                  element={<Register />}
                ></Route>
              </Routes>

                <Chat></Chat>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
