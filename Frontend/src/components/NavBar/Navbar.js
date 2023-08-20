import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import './Navbar.css'
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import Pancakes from "../../pages/Pancakes/Pancakes";
import Cart from "../../pages/Cart/Cart";

export default function Navbar() {
  return (
    <Router>
        <nav>
          <Link to="/"> HOME </Link>
          <Link to="/profile"> PROFILE </Link>
          <Link to="/pancakes"> PANCAKES</Link>
          <Link to="/juice"> JUICE </Link>
          <Link to="/login"> LOGIN </Link>
          <Link to="/cart"> CART </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/pancakes" element={<Pancakes />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </Router>
  )
}
