import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ViewDetails from "../User/ViewDetails";
import { useState } from "react";
import { url } from "../../../config";
import DiagnosisPreview from "./DiagnosisPreview/DiagnosisPreview";
import Alerta from "./Alerta/Alerta";
import "./Dashboard.css";

const Dashboard = () => {
    const [value, setValue] = useState('');
    const [users, setUsers] = useState([]);
    const [diagnosis, setDiagnosis] =  useState<any[]>([]);
    useEffect(() => {handleSubmit(null);}, []);
    const handleChange = (event: any) => {
        // this.setState({ value: event.target.value });
        setValue(event.target.value);
    
        // console.log(this.state.value);
      };
      const handleSubmit = (event: any) => {
        event?.preventDefault();
    
        const content = new Request(
          value
            ? `${url}/user/filterBy/${value}`
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
    
            setUsers(body)
          })
        );
      };
    return <>
    <Container className="padding-conatiner">
    <Container fluid className="listas">
    <Row >

      <Col className="listas"><DiagnosisPreview/></Col>
      <Col className="listas"><Alerta/></Col>
      </Row>

    </Container>
    
    <Form.Label htmlFor="inputFilter">Busca un usuario</Form.Label>
    <div className="form-container-admin">
      <Form.Control
        id="inputFilter"
        aria-describedby="passwordHelpBlock"
        value={value}
        onChange={handleChange}
      />
      <Button
        className="submit-btn-filter"
        variant="primary"
        onClick={handleSubmit}
      >
        Ingresar
      </Button>
    </div>
    <Form.Text id="passwordHelpBlock" muted>
      Puedes filtrar por Nombre o Correo. Para volver a ver todos los usuarios borra el input.
    </Form.Text>

    <ViewDetails users={users} />
    </Container>
    </>
    
}

export default Dashboard;