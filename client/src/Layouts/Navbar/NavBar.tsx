import React from "react";
import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css"

interface props{
  items: Array<any>;
}
export default class NavBar extends Component<props> {

  render() {
    return (
      <Navbar bg="dark" variant="dark" className="navbar-color">
        <Container>
          <Navbar.Brand href="./">WAWY</Navbar.Brand>
          <Nav className="me-auto">
            {this.props.items.map((item, idx) => (
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
