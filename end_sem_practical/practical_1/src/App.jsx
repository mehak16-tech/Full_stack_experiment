import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar />
      <div className="main-content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
