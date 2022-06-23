import React from "react";
import { Component } from "react";
import "./Activity.css";
import { Card, ListGroup } from "react-bootstrap";
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
    const request = new Request(`${url}/note/byuser/${this.props.loggedUser}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      //body: '{"email": "srt6221@gmail.com"}',
    });
    fetch(request).then((resp) => resp.json().then((body) =>{
      this.setState({ currentCategories: body })
      this.userCategories=body}))

  }

  handleChange(
    event: any,
    indexCategory: React.Key,
    indexInput: React.Key
  ) {
    this.userCategories[indexCategory].content[indexInput] =
      event.target.value;
    this.setState({ currentCategories: this.userCategories });
    console.log(this.state.currentCategories);
  }

  handleSubmit(event: { preventDefault: () => void }) {
    alert("A name was submitted: ");
    event.preventDefault();
  }

  onClickPlus(event: any, indexCategory: React.Key) {
    event.preventDefault()
    let currentCategory: category = this.userCategories[indexCategory]
    currentCategory.content.push("");
    console.log(this.userCategories)
    
    this.setState({ currentCategories: this.userCategories });
  }

  render() {
    return (
      <>
        <div className="activity-container">
          {this.state.currentCategories.map(
            (item: category, indexCategory: React.Key) => (
              <Card key={indexCategory} className="card-container">
                <Card.Body>
                  <Card.Title> <h5>{item.title}</h5> </Card.Title>
                  <form action="">
                    <ListGroup variant="flush">
                      {item.content.map(
                        (content: string, indexInput: React.Key) => (
                          <ListGroup.Item key={indexInput}>
                            <p><span 
                              className="textarea" 
                              role="textbox" 
                              onChange={(e) =>
                                this.handleChange(e, indexCategory, indexInput)
                              }
                              suppressContentEditableWarning={true}
                              contentEditable>
                                {content}
                            </span></p>
                          </ListGroup.Item>
                        )
                      )}
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
