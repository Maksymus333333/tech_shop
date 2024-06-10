import React from 'react';  
import './Televisions.css';  
import ProductList from '../../components/ProductList/ProductList'; 

function Televisions() {
  return (
    <div className="Televisions-container">    
      <ProductList 
        category="TV" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=5&subcategory_ids=9,10" 
      />
    </div>
  );
}

export default Televisions;
