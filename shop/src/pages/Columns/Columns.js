import React from 'react';  
import './Columns.css';  
import ProductList from '../../components/ProductList/ProductList'; 

function Columns() {
  return (
    <div className="Columns-container ">    
      <ProductList 
        category="Columns" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=6&subcategory_ids=11,12" 
      />
    </div>
  );
}

export default Columns;
