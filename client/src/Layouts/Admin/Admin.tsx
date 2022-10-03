import React, { Component, ReactNode } from "react";
import { Container } from "react-bootstrap";
import "./Admin.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Dashboard from "./Dashboard/Dashboard";
import WizardDiagnostico from "./WizardDiagnostico/WizardDiagnostico";
import AnswerByUser from "./User/AnswersByUser";

export default class Admin extends Component {
  render(): ReactNode {
    return (
      <>
        <NavBar
          items={[
            { title: "Dashboard", link: "/admin" },
            { title: "Automatizar diagnostico", link: "/admin/diagnostico" },
            //{ title: "Bullet Journal", link: "bullet-journal" },
          ]}
        ></NavBar>
        <Container fluid="lg">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/diagnostico" element={<WizardDiagnostico />}></Route>
          <Route path="/user/:id" element={<AnswerByUser />}></Route>
        </Routes>
        </Container>

      </>
    );
  }
}
