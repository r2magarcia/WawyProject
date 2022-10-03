import React from "react";
import { Component } from "react";
import "./Login.css";
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import { stringify } from "querystring";
const { url } = require("../../config");

interface state {
  records: Array<any>;
}

interface props {
  // loggedUser: string;
}

export default class Login extends Component<props, state>{
  events: any;
  currentUser: string;
  currentPassword: string;

  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      records: [],
    };
  }

  /**
   * do all the get request to fill the info with the user info from the database
   */

  handleUserChange(event: any) {
    this.currentUser = event.target.value || 0;
    console.log(this.currentUser);

  }
  handlePasswordChange(event: any) {
    this.currentPassword = event.target.value || 0;
    console.log(this.currentPassword);

  }

  handleQuery(event: { preventDefault: () => void }) {
    let data = {
      email: this.currentUser,
      password: this.currentPassword,
    };

    let eventToQuery = {
      email: this.currentUser,
      password: this.currentPassword,
    }
    let eventRecords = this.state.records;
    // eventRecords.push(eventToPush);
    console.log(eventRecords);

    this.setState({ records: eventRecords });
    this.queryToDatabase();
  }

  queryToDatabase() {
    console.log(`${url}/login/${this.currentUser}*${this.currentPassword}`);

    const request = new Request(`${url}/login/${this.currentUser}*${this.currentPassword}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    fetch(request).then(async (resp) => {
      console.log(resp.status);
      if (resp.status == 201 && await resp.json().then(body =>
        body.userType
      )) {
        window.location = `/admin` as unknown as Location
      } else if (resp.status == 201) {
        
        localStorage.setItem('email', this.currentUser);        
        window.location = `/` as unknown as Location
      }
    }
    );
  }

  redirect() {
    window.location = `/register` as unknown as Location
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Card className="text-center" bg="light" style={{ width: "26rem" }}>
                <Card.Body>
                  <Card.Title> Inicia sesión para acceder </Card.Title>
                  <Card.Text> </Card.Text>
                  <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control type="email" placeholder="Email" onChange={(e) => this.handleUserChange(e)} />
                      {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña" onChange={(e) => this.handlePasswordChange(e)} />
                    </Form.Group>

                    <Button className="btn-ingresarEstado" onClick={(e) => this.handleQuery(e)}> Ingresar </Button>

                    <Form.Group>
                      <Form.Text className="text-muted">Si aun no tienes una cuenta puedes <Card.Link onClick={() => this.redirect()}>Registrarte aqui</Card.Link></Form.Text>
                    </Form.Group>
                    
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}