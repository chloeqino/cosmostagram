import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LikedPhoto from "./components/LikedPhoto";
import "./App.css";
import NanBar from "./components/NavBar";

function App() {
  return (
 
      <div className="app">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<LikedPhoto />} path="/likes" />
          </Routes>
          <NanBar />
      </div>
    
  );
}

export default App;
