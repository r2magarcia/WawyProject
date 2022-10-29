import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { url } from "../../../../config";
import "../Dashboard.css";
export default function Alerta() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(()=>{
    const content = new Request(`${url}/get-profesional-required`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      fetch(content).then((resp) =>
        resp.json().then((body) => {
          console.log(body);
          setUsers(body);
          
        })
      );
    
  },[])
  return (
    <>
    <h2>Usuarios que pidieron ayuda</h2>
      <Table bordered hover className="listas">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e, idx) => (
            <tr key={idx}>
              <td>{idx}</td>
              <td>{e.nombre}</td>
              <td>{e.email}</td>
              <td>{e.fecha.substring(0,10)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
