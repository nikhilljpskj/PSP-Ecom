import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import MensWear from "./pages/MensWear";
import GirlsWear from "./pages/GirlsWear";
import KidsWear from "./pages/KidsWear";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product_list" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mens_wear" element={<MensWear />} />
        <Route path="/girls_wear" element={<GirlsWear />} />
        <Route path="/kids_wear" element={<KidsWear />} />

      </Routes>
    </Router>
  );
};

export default App;
