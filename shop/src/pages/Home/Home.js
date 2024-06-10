import React from 'react'; 
import Header from '../../components/Header/Header';
import './Home.css'; // Імпортуємо стилі
import CatalogList from '../../components/CatalogList/CatalogList';
import DiscountList from '../../components/DiscountList/DiscountList';

function Home() {
  return (
    <div className="home-container">  
      <Header />
      <CatalogList/> 
      <DiscountList />
    </div>
  );
}

export default Home;
