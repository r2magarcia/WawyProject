import React from "react";
import { Component } from "react";
import "./BulletJournal.css";
import Journal from "./Journal/Journal";

import { url } from "../../../config";

interface state {
  page: Array<any>;
}

interface props {
  loggedUser: string;
}

export default class BulletJournal extends Component<props, state> {
  events: any;
  currentUser: string;
  currentPassword: string;
  projects: any;

  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      page: [],
    };
  }

  /**
   * do all the get request to fill the info with the user info from the database
   */

  handleUserChange(event: any) {
    this.currentUser = event.target.value || 0;
    console.log(this.currentUser);
  }
  handlePasswordChange(event: any) {
    this.currentPassword = event.target.value || 0;
    console.log(this.currentPassword);
  }

  handleQuery(event: { preventDefault: () => void }) {
    let data = {
      email: this.currentUser,
      password: this.currentPassword,
    };

    let eventToQuery = {
      email: this.currentUser,
      password: this.currentPassword,
    };
    // let eventRecords = this.state.records;
    // eventRecords.push(eventToPush);
    // console.log(eventRecords);

    // this.setState({ records: eventRecords });
    this.queryToDatabase();
  }

  queryToDatabase() {
    console.log(`${url}/bulletjournal/${this.currentUser}`);

    const request = new Request(`${url}/bulletjournal/${this.currentUser}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    fetch(request).then(async (resp) => {
      console.log(resp.status);
      if (
        resp.status == 201 &&
        (await resp.json().then((body) => body.userType))
      ) {
        window.location = `/admin` as unknown as Location;
      } else if (resp.status == 201) {
        window.location = `/` as unknown as Location;
      }
    });
  }

  render() {
    return (
      <>
        <Journal loggedUser={this.props.loggedUser}></Journal>
      </>
    );
  }
}
