import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { AuthorizeProvider } from "./context/AuthorizerContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthorizeProvider>
    <ProductProvider>
        <App />
    </ProductProvider>
    </AuthorizeProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
