import React from "react";
import { Component } from "react";
import Activity, { category } from "./Activity/Activity";
import "./NotToDoList.css";


interface props {
  loggedUser: string;
}

interface state {
  data: any;
}

export default class NotToDoList extends Component<props, state> {
  loggedUser: string;
  constructor(props: props) {
    super(props);
    this.loggedUser = this.props.loggedUser;
    this.state = { data: [] };
    console.log(this.loggedUser);
    
    if(!this.loggedUser) window.location = `/login` as unknown as Location
  }
  categories: Array<category> = [];
  anything: any;

  render() {
    var session = localStorage.getItem("email");
    if(!session){
      window.location = `/login` as unknown as Location;
    };
    return (
      this.props.loggedUser &&
      <>
        <div className="ntdl-container">
          <div className="title-container">
            <h2>La not-to-do list</h2>
            <p>
            Hey. sabías que La <strong>not-to-do list</strong> nos sirve para identificar las cosas que nos estresan, que nos hacen perder el tiempo o nos desaniman. 
            </p>
          </div>
          <Activity loggedUser={this.props.loggedUser}></Activity>
        </div>
      </>
    );
  }
}
