import React from "react";
import { Component } from "react";
import "./Card.css";

interface props {
    category: category
}

interface state {
}

interface category {
    title: string,
    userInput: Array<String>
}

export default class Card extends Component<props, state>  {
    constructor(props: any){
        super(props);
    }
  render() {
    return (
      <>
        <div className="card-container">
            
        </div>
      </>
    );
  }
}
