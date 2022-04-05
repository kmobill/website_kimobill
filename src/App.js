import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar";
//import ToggleSidebar from "./components/ToggleSidebar";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' exact/>
      </Routes>      
    </Router>
        
    </>
  );
}

export default App;
