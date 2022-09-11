import React, { Component, ReactNode } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ViewDetails from "./User/ViewDetails";
import "./Admin.css";
import { debug } from "console";
interface state {
  value: string;
  filterBy: string;
}

export default class Admin extends Component<{}, state> {
  constructor(props: any) {
    super(props);

    this.state = { value: "", filterBy: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: any) => {
    this.setState({ value: event.target.value });

    console.log(this.state.value);
    console.log(this.state.filterBy);
    
  };
  handleSubmit = () => {    
    this.setState({ filterBy: this.state.value });
  };

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
            <Button className="submit-btn-filter" variant="primary" onClick={this.handleSubmit}>Ingresar</Button>

              </div>
              <Form.Text id="passwordHelpBlock" muted>
                Puedes filtrar por Nombre, Correo o Codigo.
              </Form.Text>

          <ViewDetails filterBy={this.state.value} />
        </Container>
      </>
    );
  }
}
