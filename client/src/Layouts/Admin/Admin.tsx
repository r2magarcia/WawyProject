import React, { Component, ReactNode } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ViewDetails from "./User/ViewDetails";
import "./Admin.css";
import { Route, Routes } from "react-router-dom";
import AnswerByUser from "./User/AnswersByUser";
const { url } = require("../../config");

interface state {
  value: string;
  users: Array<any>;
}

export default class Admin extends Component<{}, state> {
  constructor(props: any) {
    super(props);

    this.state = { value: "", users: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: any) => {
    this.setState({ value: event.target.value });

    console.log(this.state.value);
  };
  handleSubmit = (event: any) => {
    event?.preventDefault();

    const content = new Request(
      this.state.value
        ? `${url}/user/filterBy/${this.state.value}`
        : `${url}/user`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    fetch(content).then((resp) =>
      resp.json().then((body) => {
        console.log(body);

        this.setState({ users: body });
      })
    );
  };

  componentDidMount() {
    this.handleSubmit(null);
  }

  render(): ReactNode {
    return (
      <>
        <Container fluid="lg">
          <Form.Label htmlFor="inputFilter">Busca un usuario</Form.Label>
          <div className="form-container-admin">
            <Form.Control
              id="inputFilter"
              aria-describedby="passwordHelpBlock"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Button
              className="submit-btn-filter"
              variant="primary"
              onClick={this.handleSubmit}
            >
              Ingresar
            </Button>
          </div>
          <Form.Text id="passwordHelpBlock" muted>
            Puedes filtrar por Nombre o Correo. Para volver a ver todos los usuarios borra el input.
          </Form.Text>

          <ViewDetails users={this.state.users} />
        </Container>
      </>
    );
  }
}
