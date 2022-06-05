import React from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";
import NavBar from "../NavBar";
import "./Chat.css";

interface props {}

interface state {
  chatIsActive: boolean;
}

export default class Chat extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = { chatIsActive: true };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm = () => {
    this.chatUI = (
      <>
        <button className="open-button" onClick={this.openForm}>
          Chat
        </button>
                <div className="chat-popup" id="myForm">
                <form action="/action_page.php" className="form-container">
                  <h1>Chat</h1>
        
                  <label htmlFor="msg">
                    <b>Message</b>
                  </label>
                  <textarea placeholder="Type message.." name="msg" required></textarea>
        
                  <button type="submit" className="btn">
                    Send
                  </button>
                  <button type="button" className="btn cancel" onClick={this.closeForm}>
                    Close
                  </button>
                </form>
              </div>
      </>
    );
    this.setState({ chatIsActive: true });
  };

  closeForm = () => {
    console.log("Close form");
    this.chatUI = (<button className="open-button" onClick={this.openForm}>
    Chat
  </button>)
    this.setState({ chatIsActive: false });
  };

  chatUI = ((
    <>
      <button className="open-button" onClick={this.openForm}>
        Chat
      </button>
              <div className="chat-popup" id="myForm">
              <form action="/action_page.php" className="form-container">
                <h1>Chat</h1>
      
                <label htmlFor="msg">
                  <b>Message</b>
                </label>
                <textarea placeholder="Type message.." name="msg" required></textarea>
      
                <button type="submit" className="btn">
                  Send
                </button>
                <button type="button" className="btn cancel" onClick={this.closeForm}>
                  Close
                </button>
              </form>
            </div>
    </>
  ));

  render() {
    return this.chatUI;
  }
}
