// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'; 
import Profile from './components/Profile/Profile';
import Smartphones from './pages/Smartphones/Smartphones';
import Laptops from './pages/Laptops/Laptops';
import Computers from './pages/Computers/Computers';
import Televisions from './pages/Televisions/Televisions';
import Tablets from './pages/Tablets/Tablets';
import Columns from './pages/Columns/Columns';
import ProductDetails from './pages/ProductDetails/ProductDetails'; 
import CategoriesPopup from './components/Categories/CategoriesPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const togglePopup = () => {
    setIsPopupOpen(prevState => !prevState);
  };

  const addToCart = (product) => {
    // Логіка для додавання товару в корзину
    console.log('Adding to cart:', product);
    setCartItems([...cartItems, product]); // Додаємо товар до списку корзини
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar togglePopup={togglePopup} />
        {isPopupOpen && <CategoriesPopup togglePopup={togglePopup} />}
        <Routes>
          <Route path='/tech_shop' element={<Home />} /> 
          <Route path='profile' element={<Profile />} />
          <Route path='/Smartphones' element={<Smartphones />} />
          <Route path='/Laptops' element={<Laptops />} />
          <Route path='/Computers' element={<Computers />} />
          <Route path='/Televisions' element={<Televisions />} />
          <Route path='/Tablets' element={<Tablets />} />
          <Route path='/Columns' element={<Columns />} />
          {/* Передаємо функцію addToCart у компонент ProductDetails */}
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
