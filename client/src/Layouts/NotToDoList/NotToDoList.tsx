import React from "react";
import { Component } from "react";
import Activity, { category } from "./Activity/Activity";
import "./NotToDoList.css";

export default class NotToDoList extends Component {
  categories: Array<category> = [
    {
      title: "Cosas que te hacen perder el tiempo",
      userInput: [
        "Lorem ipsum dolor sit",
        "elenitlaborum ea molestias consequuntur eos",
        "Repellendus laboriosam animi",
      ],
    },
    {
      title: "Cosas que te estresan",
      userInput: [
        "Lorem ipsum dolor sit",
        "elenitlaborum ea molestias consequuntur eos",
        "Repellendus laboriosam animi",
      ],
    },
    {
      title: "Cosas que te sientes obligado a hacer",
      userInput: [
        "Lorem ipsum dolor sit",
        "elenitlaborum ea molestias consequuntur eos",
        "Repellendus laboriosam animi",
        "Dignissimos ratione nulla possimus mollitia fugiat labore autemillo veritatis aliquid!",
      ],
    },
    {
      title: "Cosas que drenan tu energia",
      userInput: [
        "Lorem ipsum dolor sit",
        "elenitlaborum ea molestias consequuntur eos",
        "Repellendus laboriosam animi",
      ],
    },
    {
      title: "Cosas que no tienen que hacerse",
      userInput: [
        "Lorem ipsum dolor sit",
        "elenitlaborum ea molestias consequuntur eos",
        "Repellendus laboriosam animi",
      ],
    },
    {
      title: "Cosas que no puedes controlar",
      userInput: [
        "Lorem ipsum dolor sit",
        "elenitlaborum ea molestias consequuntur eos",
        "Repellendus laboriosam animi",
        "Dignissimos ratione nulla possimus",
      ],
    },
  ];
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
          <Activity categories={this.categories}></Activity>
        </div>
      </>
    );
  }
}
