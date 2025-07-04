import './Cart.css';
import React, { useState } from "react";

const Cart = ({ cartItems, isOpen, toggleCart }) => {
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
              {cartItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;