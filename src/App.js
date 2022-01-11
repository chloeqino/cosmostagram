import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto.js";
import "./App.css";

function App() {
  return (
 
      <div className="app">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<NasaPhoto />} path="/nasaphoto" />
          </Routes>
          
      </div>
    
  );
}

export default App;
