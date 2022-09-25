import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "../Chat/Chat";
import DiarioEmociones from "../DiarioEmociones/DiarioEmociones";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import NavBar from "../NavBar";
import NotToDoList from "../NotToDoList/NotToDoList";
import "./AppContent.css";

export default class AppContent extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <Container fluid="lg">
          <Row>
            <div className="app-container">
              <Routes>
                <Route
                  path="/not-to-do-list"
                  element={<NotToDoList loggedUser="test@email.com" />}
                ></Route>
                <Route path="/"
                  element={<Home />}
                ></Route>
                <Route
                  path="/diario-de-emociones"
                  element={<DiarioEmociones loggedUser="test@email.com" />}
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

              <div className="chat-container">
                <Chat></Chat>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
