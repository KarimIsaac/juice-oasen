// src/components/NavBar/Navbar.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import './Navbar.css';
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import Cart from "../../pages/Cart/Cart";
import Product from "../../pages/Pancakes/Product";
import Juices from "../../pages/Juice/Juices";
import ProductScreen from "../../pages/Pancakes/ProductScreen";
import JuiceScreen from "../../pages/Juice/JuiceScreen";
import { useSelector } from 'react-redux';
import { useState } from "react";

export default function Navbar() {
  const email = useSelector((state) => state.user.email);
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <nav>
        <Link to="/"> HOME </Link>
        <Link to="/juices"> JUICE </Link>
        <Link to="/login"> LOGIN </Link>
        <Link to="/pancakes"> Pancakes </Link>
        {email && <p>Welcome, {email}</p>}
      </nav>

      <Cart cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Pancakes" element={<Product addToCart={addToCart} />} />
        <Route path="/Juices" element={<Juices addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/juice/:id" element={<JuiceScreen />} />
      </Routes>
    </Router>
  );
}
