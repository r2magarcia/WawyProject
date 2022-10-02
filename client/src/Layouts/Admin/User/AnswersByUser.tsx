import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { url } from "../../../config";
import { useParams } from "react-router-dom";

// export default class AnswerByUser extends React.Component<RouteProps, state> {

  export default function AnswerByUser() {
    let [arr, setArr] = useState<any[]>([]);
    let { id } = useParams();
    useEffect(() => {
      console.log('id', `${url}/answer/byUser/${id}`);
      
      const content = new Request(`${url}/answer/byUser/${id}`,
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
          setArr(body);
        })
      );
      }, []); 
  
    return (
      <>
      <Container fluid="lg">
      <div className="ntdl-container">
          <div className="title-container">
            <h2>Respuestas</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Pregunta</th>
                  <th>Respuesta</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {arr?.map((answer) => {
                    return (
                      <tr key={answer.id}>
                        <td>{answer.pregunta}</td>
                        <td>{answer.respuesta}</td>
                      </tr>
                    );
                  })}
                </>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
        
      </>
    );
  }


