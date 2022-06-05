import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Layouts/NavBar'
import AppContent from './Layouts/AppContent/AppContent';



function App() {
  return (
    <><NavBar></NavBar>
    <AppContent></AppContent>
    </>
  );
}

export default App;
