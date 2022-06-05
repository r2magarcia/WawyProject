import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "../Chat/Chat";
import Home from "../Home/Home";
import NotToDoList from "../NotToDoList/NotToDoList";
import "./AppContent.css";

export default class AppContent extends Component {
  render() {
    return (
      <>
        <Container fluid="lg">
          <Row>
          <div className="app-container">
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/not-to-do-list"
                    element={<NotToDoList />}
                  ></Route>
                  <Route
                    path="/"
                    element={<Home />}
                  ></Route>
                </Routes>
              </BrowserRouter>

              <div className="chat-container"><Chat></Chat></div>
              </div>
          </Row>
        </Container>
        
      </>
    );
  }
}
