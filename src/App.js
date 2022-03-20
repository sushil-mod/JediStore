import MockMan from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";


function App() {
  return (
   
    <div>
      <Navbar/>
        <Routes>

            <Route path="/mockman" element={ <MockMan/> } />
            <Route path="/" element={ <Home/> }  />

        </Routes>
      <Footer/>
    </div>
     
  );
}

export default App;
