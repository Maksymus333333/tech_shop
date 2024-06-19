import React from 'react';
import './Smartphones.css';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList'; 

function Smartphones() {
 
   // Define the category for this component
  const category = 'Smartphones';
 
    // Create the URL for the category by replacing spaces with hyphens and converting to lowercase
  const categoryUrl = `/${category.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="smartphones-container">
        {/* Breadcrumb navigation */}
      <div className="breadcrumb">
           {/* Link to the main shop page */}
        <Link  to="/tech_shop ">Main</Link>
        <span className="spans">/</span>   
            {/* Link to the current category page */}
        <Link style={{ color: '#0c0c0c' }} to={categoryUrl}>{category}</Link>
      </div>
      
       {/* Product list for the smartphones category */}
      <ProductList
        category={category}
        
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=1&subcategory_ids=1,2,3"
      />
        
    </div>
  );
}

export default Smartphones;
