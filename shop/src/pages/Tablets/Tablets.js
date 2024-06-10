import React from 'react';  
import './Tablets.css';  
import ProductList from '../../components/ProductList/ProductList'; 

function Tablets() {
  return (
    <div className="Tablets-container">    
      <ProductList 
        category="Tablets" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=4&subcategory_ids=7" 
      />
    </div>
  );
}

export default Tablets;
