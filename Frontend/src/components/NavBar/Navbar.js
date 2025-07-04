
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
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
import { clearUser } from "../../slices/userApiSlice";
import Checkout from "../../pages/Checkout/Checkout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
function NavbarContent() {
   const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
const dispatch = useDispatch();

  const addToCart = (item) => {
  if (!email) {
    navigate("/login");
    return;
  }

  setCartItems((prevItems) => {
    const existingItem = prevItems.find((i) => i.id === item.id);
    if (existingItem) {
      return prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      return [...prevItems, { ...item, quantity: 1 }];
    }
  });
};
const handleLogout = () => {
  

  dispatch(clearUser());
  navigate("/login"); 
};
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const isOnCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      <nav>
        {isOnCheckoutPage ? (
          <Link to="/">
            <button className="go-to-checkout">Continue Shopping</button>
          </Link>
        ) : (
          isCartOpen && cartItems.length > 0 && (
            <Link to="/checkout">
              <button className="go-to-checkout">Go to Checkout</button>
            </Link>
          )
        )}

        <Link to="/"> HOME </Link>
        <Link to="/juices"> JUICE </Link>
        <Link to="/login"> LOGIN </Link>
        <Link to="/pancakes"> Pancakes </Link>
        {email && <p>Welcome, {email}</p>}
      </nav>

      <Cart
        cartItems={cartItems}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
{email && (
  <>
    <p>Welcome, {email}</p>
    <button onClick={handleLogout}>Logout</button>
  </>
)}  
      <Routes>
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Pancakes" element={<Product addToCart={addToCart} />} />
        <Route path="/Juices" element={<Juices addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/juice/:id" element={<JuiceScreen />} />
      </Routes>
    </>
    
  );
}

export default function Navbar() {
  return (
    <Router>
      <NavbarContent />
    </Router>
  );
}
