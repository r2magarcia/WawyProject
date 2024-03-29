import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContent from "./Layouts/User/AppContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Layouts/Admin/Admin";
import AnswerByUser from "./Layouts/Admin/User/AnswersByUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppContent />}></Route>
          {/* <Route path="/:email" element={<AppContent />}></Route> */}
          <Route path="/admin/*" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
