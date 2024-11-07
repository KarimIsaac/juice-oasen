
import './Cart.css' 
import React, { useState } from "react";
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-container">
      <div className="cart-icon" onClick={toggleCart}>
        🛒
      </div>

      {isOpen && (
        <div className="cart-dropdown">
          <h3>Cart Items</h3>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;