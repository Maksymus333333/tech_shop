import React from 'react';
import ProductList from './../components/ProductList/ProductList';
import Header from './../components/Header/Header';
import './Home.css'; // Імпортуємо стилі
import CatalogList from '../components/CatalogList/CatalogList';

function Home() {
  return (
    <div className="home-container">  
      <Header />
      <CatalogList/>
      <ProductList />
    </div>
  );
}

export default Home;
