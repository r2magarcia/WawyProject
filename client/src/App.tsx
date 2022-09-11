import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContent from "./Layouts/AppContent/AppContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Layouts/Admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/*" element={<AppContent />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
