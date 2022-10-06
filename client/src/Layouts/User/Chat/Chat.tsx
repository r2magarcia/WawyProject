import React from "react";
import { Component } from "react";
import "./Chat.css";



export default class Chat extends Component {
  render() {
    return (
        <iframe
        className="chatbot-container-embed"
          id="inlineFrameExample"
          title="Inline Frame Example"
          src="http://www.terapiachat.cl/chatbot/"
        ></iframe>
    );
  }
}
