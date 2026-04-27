import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2>Shopping Cart App</h2>
      <div className="nav-controls">
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <div className="cart-icon">
          Cart ({totalItems})
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
