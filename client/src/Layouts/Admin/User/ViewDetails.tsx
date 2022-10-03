import React from "react";
import { Component } from "react";
import { Table } from "react-bootstrap";

interface props {
  users: Array<any>;
}


export default class ViewDetails extends Component<props> {
  constructor(props: any) {    
    super(props);

  }


  render() {
    return (
      <>
        <div className="ntdl-container">
          <div className="title-container">
            <h2>Historial de Chat por Usuario</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {this.props.users.map((user) => {
                    return (
                      
                      <tr key={user.idusuario} onClick={() => window.location = `/admin/user/${user.idusuario}` as unknown as Location}>
                        <td>{user.idusuario}</td>
                        <td>{user.nombre}</td>
                        <td>{user.email}</td>
                      </tr>
                      

                    );
                  })}
                </>
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}
