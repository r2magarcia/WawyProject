import React from "react";
import { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { json } from "stream/consumers";
import Activity, { category } from "./Activity/Activity";
import "./NotToDoList.css";

const { url } = require("../../config");

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
  }
  categories: Array<category> = [];
  anything: any;

  render() {
    return (
      <>
        <div className="ntdl-container">
          <div className="title-container">
            <h2>Not to do List</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              laborum ea molestias consequuntur eos, natus, facere magni
              voluptatem, nulla dolores ipsum? Repellendus laboriosam animi
              blanditiis expedita rerum dolorem incidunt perspiciatis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
              illo? Facilis quas modi nostrum asperiores a, libero quasi ipsa.
              Dignissimos ratione nulla possimus mollitia fugiat labore autem
              illo veritatis aliquid!
            </p>
          </div>
          <Activity loggedUser="srt6221@gmail.com"></Activity>
        </div>
      </>
    );
  }
}
