import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ViewDetails from "../User/ViewDetails";
import { useState } from "react";
import { url } from "../../../config";

const Dashboard = () => {
    const [value, setValue] = useState('');
    const [users, setUsers] = useState([]);

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
    return <><Form.Label htmlFor="inputFilter">Busca un usuario</Form.Label>
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
    </>
}

export default Dashboard;