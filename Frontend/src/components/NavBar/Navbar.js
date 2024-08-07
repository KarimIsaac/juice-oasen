import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import './Navbar.css'
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import Cart from "../../pages/Cart/Cart";
import Pancakes from "../../pages/Pancakes/Pancakes";
import Juices from "../../pages/Juice/Juices";
export default function Navbar() {
  return (
    <Router>
        <nav>
          <Link to="/"> HOME </Link>
          
          <Link to="/juices"> JUICE </Link>
          <Link to="/login"> LOGIN </Link>
          <Link to="/cart"> CART </Link>
          <Link to="/pancakes"> Pancakes </Link>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Pancakes" element={<Pancakes />} />
          <Route path="/Juices" element={<Juices />} />

        </Routes>

    </Router>
  )
}
