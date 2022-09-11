import React from "react";
import { Component } from "react";
import "./Activity.css";
import { Button, Card, ListGroup } from "react-bootstrap";
import { request } from "https";
const { url } = require("../../../config");

interface props {
  loggedUser: string;
}

interface state {
  currentCategories: Array<category>;
}

export interface category {
  title: string;
  content: Array<string>;
}

export default class Activity extends Component<props, state> {
  userCategories: any;
  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = { currentCategories: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userCategories = [];
  }
  componentDidMount() {
    const content = new Request(`${url}/note/byuser/${this.props.loggedUser}`, {
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

        this.setState({ currentCategories: categorias });
        this.userCategories = categorias;
      })
    );
    
  }

  handleChange(event: any, indexCategory: React.Key, indexInput: React.Key) {
    console.log(
      "handle change"
    );
    
    this.userCategories[indexCategory].content[indexInput] = event.target.value;
    this.setState({ currentCategories: this.userCategories });
    console.log(this.userCategories);
    
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log(this.state.currentCategories);

    const request = new Request(`${url}/note/byuser/${this.props.loggedUser}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.currentCategories),
    });

    fetch(request).then((resp) =>
    resp.json().then((body) => {
      if(body.error){
        console.log('algo salio mal ingresando los datos');
        
      }else{
        console.log('datos entrados');
        
      }
    })
  );

    
    event.preventDefault();
  }

  onClickPlus(event: any, indexCategory: React.Key) {
    event.preventDefault();
    let currentCategory: category = this.userCategories[indexCategory];
    currentCategory.content.push("");
    this.setState({ currentCategories: this.userCategories });
  }
  render() {
    return (
      <>
      <div className="activity-bar">
        <button className="btn-guardar" onClick={this.handleSubmit}>Guardar</button>
      </div>
        <div className="activity-container">
          {this.state.currentCategories.map(
            (item: category, indexCategory: React.Key) => (
              <Card key={indexCategory} className="card-container">
                <Card.Body>
                  <Card.Title>
                    <h5>{item.title}</h5>
                  </Card.Title>
                  <form action="">
                    <ListGroup variant="flush"> 
            
                    {/* <p><>{item.title} </></p>  */}
                    <>
                      {item.content.map(
                        (content: string, indexInput: React.Key) => (
                          <ListGroup.Item key={indexInput}>
                            <p className="input-container">
                            <textarea value={content} className="input-text-area" name="input" onChange={(e) => this.handleChange(e, indexCategory, indexInput)} />
                            </p>
                          </ListGroup.Item>
                        )
                      )}
                      </>
                      <button
                        className="plus-btn"
                        onClick={(e) => this.onClickPlus(e, indexCategory)}
                      >
                        +
                      </button>
                     </ListGroup>
                  </form>
                </Card.Body>
              </Card>
            )
          )}
        </div>
      </>
    );
  }
}
