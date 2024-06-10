import React from 'react';  
import './Laptops.css';  
import ProductList from '../../components/ProductList/ProductList'; 

function Laptops() {
  return (
    <div className="laptops-container">    
      <ProductList 
        category="Ноутбуки" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=2&subcategory_ids=4,5" 
      />
    </div>
  );
}

export default Laptops;
