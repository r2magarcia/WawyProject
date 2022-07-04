import React from "react";
import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css"

export default class NavBar extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" className="navbar-color">
        <Container>
          <Navbar.Brand href="./">WAWY</Navbar.Brand>
          <Nav className="me-auto">
            {[
              { title: "Diario de Emociones", link: "diario-de-emociones" },
              { title: "Not to do list", link: "not-to-do-list" },
              //{ title: "Bullet Journal", link: "bullet-journal" },
            ].map((item, idx) => (
              <Nav.Link href={item.link} key={idx}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
