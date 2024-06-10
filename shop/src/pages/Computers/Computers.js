import React from 'react';  
import './Computers.css';  
import ProductList from '../../components/ProductList/ProductList'; 

function Computers() {
  return (
    <div className="Computers-container">    
      <ProductList 
        category="Комп'ютери" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=3&subcategory_ids=6" 
      />
    </div>
  );
}

export default Computers;
