import React from 'react';  
import './Smartphones.css';  
import ProductList from '../../components/ProductList/ProductList'; 

function Smartphones() {
  return (
    <div className="smartphones-container">    
      <ProductList  category="смартфони" 
      apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=1&subcategory_ids=1,2,3" />
      
    </div>
  );
}

export default Smartphones;
