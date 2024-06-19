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
import CartPopup from './components/CartPopup/CartPopup';

function App() {
    // State to manage the visibility of the categories popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    // State to manage the items in the cart
  const [cartItems, setCartItems] = useState([]);
    // State to manage the visibility of the cart popup
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);


    // Function to toggle the categories popup
  const togglePopup = () => {
    setIsPopupOpen(prevState => !prevState);
    if (!isPopupOpen) {
      setIsCartPopupOpen(false); // Close the cart popup if the categories popup is opened
    }
  };

  const toggleCartPopup = () => {
    setIsCartPopupOpen(prevState => !prevState);
    if (!isCartPopupOpen) {
      setIsPopupOpen(false); // Close the categories popup if the cart popup is opened
    }
  };

   // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartPopupOpen(true); // Open the cart popup
    setIsPopupOpen(false);   // Close the categories popup
  };

   // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(item => item.id !== productToRemove.id));
  };

  return (
    <Router>
      <div className="app-container">
          {/* Navbar with functions to toggle popups and display cart items */}
        <Navbar togglePopup={togglePopup} toggleCartPopup={toggleCartPopup} cartItems={cartItems} />
         {/* Conditional rendering of the categories popup */}
        {isPopupOpen && <CategoriesPopup togglePopup={togglePopup} />}
            {/* Conditional rendering of the cart popup */}
        {isCartPopupOpen && <CartPopup cartItems={cartItems} toggleCart={toggleCartPopup} removeFromCart={removeFromCart} />}
        <Routes>
          {/* Define the routes for the application */}
          <Route path='/tech_shop' element={<Home />} /> 
          <Route path='profile' element={<Profile />} />
          <Route path='/Smartphones' element={<Smartphones />} />
          <Route path='/Laptops' element={<Laptops />} />
          <Route path='/Computers' element={<Computers />} />
          <Route path='/Televisions' element={<Televisions />} />
          <Route path='/Tablets' element={<Tablets />} />
          <Route path='/Columns' element={<Columns />} />
            {/* Route for product details with the addToCart function passed as a prop */}
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
