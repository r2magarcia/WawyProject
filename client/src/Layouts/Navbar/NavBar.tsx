// import { url } from "inspector";
import React from "react";
import { Component } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css"
const { url } = require("../../config");


interface props {
  items: Array<any>;
}

export default class NavBar extends Component<props> {

  handleQuery(event: { preventDefault: () => void }) {
    let data = {
      email: window.localStorage.getItem('email')
    }
    console.log(data);
    if(data.email){
      this.queryToDatabase(data.email);
    }
  }

  queryToDatabase(email: string) {
    const request = new Request(`${url}/user/helpMe/${email}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    fetch(request).then(async(resp) =>{
      if(resp.status == 201){
        console.log("La peticion de ayuda ha sido creada");
        
      }
    })
  }


  render() {
    const expand = false
    return (
      <Navbar bg="dark" variant="dark" className="navbar-color" expand={false}>
        <Container>
          <Navbar.Brand href="./">WAWY</Navbar.Brand>
          {/* <Nav className="me-auto">
            {this.props.items.map((item, idx) => (
              <Nav.Link href={item.link} key={idx}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav> */}
          <NavDropdown title="Actividades">
            {this.props.items.map((item, idx) => (
              <NavDropdown.Item href={item.link} key={idx}>
                {item.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="navbar-color"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <NavDropdown.Divider></NavDropdown.Divider>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="./Login" onClick={() => { localStorage.clear(); }}>LogOut</Nav.Link>
                {/* <NavDropdown.Divider></NavDropdown.Divider> */}
                <Nav.Link href="#action2" onClick={(e) => this.handleQuery(e)}>Ayuda profesional</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}
