import MockMan from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Wishlist from "./pages/wishlist/Wishlist";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    
    <div>
      <ToastContainer 
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
        <Routes>
            <Route path="/mockman" element={ <MockMan/> } />
            <Route path="/" element={ <Home/> }  />
            <Route path="/products" element={<Product/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/cart" element={ <PrivateRoutes><Cart/></PrivateRoutes> } />
            <Route path="/wishlist" element={<PrivateRoutes> <Wishlist/> </PrivateRoutes>} />
        </Routes>
    </div>
     
  );
}

export default App;
