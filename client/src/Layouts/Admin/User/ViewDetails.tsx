import React from "react";
import { Component } from "react";
import { Table } from "react-bootstrap";
const { url } = require("../../../config")

interface props {
  filterBy: string | null;
}

interface state {
  users: Array<any>;
}


export default class ViewDetails extends Component<props, state> {
  constructor(props: any) {
    super(props);

    this.state = { users: [] };
  }


  componentDidMount() {
    const content = new Request(`${url}/note/byuser/${this.props.filterBy}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    fetch(content).then((resp) =>
      resp.json().then((body) => {
        let categorias = body.map((e: any) => {
          return {
            id: e.id,
            title: e.title,
            content: e.contenido,
          };
        });
        console.log(categorias);

        this.setState({ users: categorias });
      })
    );
    
  }

  render() {
    return (
      <>
        <div className="ntdl-container">
          <div className="title-container">
            <h2>Admin</h2>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>

      </tbody>
    </Table>
          </div>
        </div>
      </>
    );
  }
}
