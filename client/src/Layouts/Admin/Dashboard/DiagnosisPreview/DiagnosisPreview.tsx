import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { url } from "../../../../config";
import "../Dashboard.css";

export default function DiagnosisPrview() {
  const [diagnosis, setDiagnosis] = useState<any[]>([]);
  
  const makeRequest = () => {
    const content = new Request(`${url}/assignDiagnosis`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    fetch(content).then((resp) =>
      resp.json().then((body) => {
        console.log(body);
        
        const content2 = new Request(`${url}/diagnostico`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        fetch(content2).then((resp) =>
          resp.json().then((body2) => {
            // console.log(body);
    
            setDiagnosis(body2);
          })
        );
      })
    );
  };

  useEffect(()=>{
    const content = new Request(`${url}/diagnostico`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      fetch(content).then((resp) =>
        resp.json().then((body) => {
          // console.log(body);
  
          setDiagnosis(body);
        })
      );
    
  },[])
  return (
    <>
    <h2 className="fixed-top-title">Diagnosticos Generados</h2>
      <Table bordered hover className="listas">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Diagnosis</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          {diagnosis.map((e, idx) => (
            <tr key={idx}>
              <td>{idx}</td>
              <td>{e.user}</td>
              <td>{e.diagnostico}</td>
              <td>{e.notas}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button  className="fixed-bottom-diag" onClick={makeRequest}>Buscar Diagnosis</Button>
    </>
  );
}
