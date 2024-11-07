import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import './Navbar.css'
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import Cart from "../../pages/Cart/Cart";
import Pancakes from "../../pages/Pancakes/Product";
import Juices from "../../pages/Juice/Juices";
import ProductScreen from "../../pages/Pancakes/ProductScreen";
import JuiceScreen from "../../pages/Juice/JuiceScreen";
export default function Navbar() {
  return (
    <Router>
        <nav>
          <Link to="/"> HOME </Link>
          
          <Link to="/juices"> JUICE </Link>
          <Link to="/login"> LOGIN </Link>
          
          <Link to="/pancakes"> Pancakes </Link>
          
        </nav>
        <Cart/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Pancakes" element={<Pancakes />} />
          <Route path="/Juices" element={<Juices />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/juice/:id" element={<JuiceScreen />} />
        </Routes>

    </Router>
  )
}
