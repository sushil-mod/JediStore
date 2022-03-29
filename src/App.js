import MockMan from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Wishlist from "./pages/wishlist/Wishlist";



function App() {
  return (
   
    <div>
        <Routes>

            <Route path="/mockman" element={ <MockMan/> } />
            <Route path="/" element={ <Home/> }  />
            <Route path="/products" element={<Product/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
        </Routes>
    </div>
     
  );
}

export default App;
