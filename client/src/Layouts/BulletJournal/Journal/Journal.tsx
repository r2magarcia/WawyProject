import React from "react";
import { Component } from "react";
import "./Journal.css";
import { Card, Button, Form, Row, Col, Container, Pagination, Accordion } from "react-bootstrap";
import { stringify } from "querystring";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
const { url } = require("../../../config");

interface state {
    projectsTomorrow: Array<any>;
}

interface props {
    // loggedUser: string;
}

export default class Journal extends Component<props, state>{
    events: any;
    currentUser: string;
    currentPassword: string;
    projects: any;

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            projectsTomorrow: [],
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
        // let eventRecords = this.state.records;
        // eventRecords.push(eventToPush);
        // console.log(eventRecords);

        // this.setState({ records: eventRecords });
        this.queryToDatabase();
    }

    queryToDatabase() {
        console.log(`${url}/Journal/${this.currentUser}*${this.currentPassword}`);

        const request = new Request(`${url}/Journal/${this.currentUser}*${this.currentPassword}`, {
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
                window.location = `/` as unknown as Location
            }
        }
        );
    }

    handleChange(event: any, indexCategory: React.Key, indexInput: React.Key) {
        console.log(
            "handle change"
        );

        this.projects[indexCategory].content[indexInput] = event.target.value;
        this.setState({ projectsTomorrow: this.projects });
        console.log(this.projects);

    }

    onClickPlus(event: any, indexCategory: React.Key) {
        event.preventDefault();
        let currentProject = this.projects[indexCategory];
        currentProject.content.push("");
        this.setState({ projectsTomorrow: this.projects });
    }

    render() {
        return (
            <>
                <Container>
                    <Container>
                        {/* {this.state.projectsTomorrow.map(
                            (item: any, indexCategory: React.Key) => ( */}
                        <Accordion defaultActiveKey={["0"]} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Notas</Accordion.Header>
                                <Accordion.Body>
                                    <textarea className="input-text-area" name="input" />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Mañana</Accordion.Header>
                                <Accordion.Body>
                                    <Container>
                                        <Form.Group>
                                            <Form.Control placeholder="Actividad" onChange={(e) => this.handleUserChange(e)} />
                                            <div key={`inline-checkbox`} className="mb-3">
                                                <Form.Check inline label="L" />
                                                <Form.Check inline label="M" />
                                                <Form.Check inline label="M" />
                                                <Form.Check inline label="J" />
                                                <Form.Check inline label="V" />
                                                <Form.Check inline label="S" />
                                                <Form.Check inline label="D" />
                                            </div>
                                        </Form.Group>
                                        <Button>Añadir actividad</Button>
                                    </Container>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Tarde y Noche</Accordion.Header>
                                <Accordion.Body>
                                    <Container>
                                        <Form.Group>
                                            <Form.Control placeholder="Actividad" onChange={(e) => this.handleUserChange(e)} />
                                            <div key={`inline-checkbox`} className="mb-3">
                                                <Form.Check inline label="L" />
                                                <Form.Check inline label="M" />
                                                <Form.Check inline label="M" />
                                                <Form.Check inline label="J" />
                                                <Form.Check inline label="V" />
                                                <Form.Check inline label="S" />
                                                <Form.Check inline label="D" />
                                            </div>
                                        </Form.Group>
                                        <Button>Añadir actividad</Button>
                                    </Container>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Proyecto Semanal</Accordion.Header>
                                <Accordion.Body>
                                    <Container>
                                        <Form.Group>
                                            <Form.Check inline label="X" />
                                            <Form.Control placeholder="Projecto" onChange={(e) => this.handleUserChange(e)} />
                                        </Form.Group>
                                        <Button>Añadir Projecto</Button>
                                    </Container>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* )
                        )} */}
                    </Container>
                </Container>
            </>
        );
    }
}