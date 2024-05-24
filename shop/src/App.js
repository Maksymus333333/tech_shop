import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> 
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes> 
      </div>
    </Router>
  );
}

export default App;
