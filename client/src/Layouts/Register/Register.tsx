import React from "react";
import { Component } from "react";
import "./Register.css";
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import { stringify } from "querystring";
const { url } = require("../../config");

interface state {
    records: Array<any>;
}

interface props {
    // loggedUser: string;
}

export default class Register extends Component<props, state> {

    events: any;
    currentUser: string;
    currentPassword: string;
    currentName: string;

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            records: [],
        };
    }

    handleUserChange(event: any) {
        this.currentUser = event.target.value || 0;
        console.log(this.currentUser);

    }
    handlePasswordChange(event: any) {
        this.currentPassword = event.target.value || 0;
        console.log(this.currentPassword);

    }
    handleNameChange(event: any) {
        this.currentName = event.target.value || 0;
        console.log(this.currentName);

    }

    handleQuery(event: { preventDefault: () => void }) {
        let data = {
            email: this.currentUser,
            contrasena: this.currentPassword,
            activo: 1,
            nombre: this.currentName,
        };

        let eventRecords = this.state.records;
        console.log();
        
        // eventRecords.push(eventToPush);
        console.log(eventRecords);

        this.setState({ records: eventRecords });
        this.queryToDatabase(data);
    }

    queryToDatabase(data: any) {
        console.log(`${url}/register`);

        const request = new Request(`${url}/register`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        fetch(request).then(async (resp) => {
            console.log(resp.status);
            if (resp.status == 201){
                localStorage.setItem('email', this.currentUser);
                window.location = `/` as unknown as Location;
            }
        }
        ); 
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
                                    <Card.Title> Registro </Card.Title>
                                    <Card.Text> </Card.Text>
                                    <Form>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Correo electronico</Form.Label>
                                            <Form.Control type="email" placeholder="Email" onChange={(e) => this.handleUserChange(e)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="name" placeholder="Nombre" onChange={(e) => this.handleNameChange(e)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Contraseña</Form.Label>
                                            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => this.handlePasswordChange(e)} />
                                        </Form.Group>

                                    </Form>
                                    <Button className="btn-ingresarEstado" onClick={(e) => this.handleQuery(e)}> Ingresar </Button>
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