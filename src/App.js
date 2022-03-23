import MockMan from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";



function App() {
  return (
   
    <div>
        <Routes>

            <Route path="/mockman" element={ <MockMan/> } />
            <Route path="/" element={ <Home/> }  />
            <Route path="/products" element={<Product/>} />
        </Routes>
    </div>
     
  );
}

export default App;
