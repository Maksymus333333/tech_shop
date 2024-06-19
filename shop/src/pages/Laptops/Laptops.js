import React from 'react';  
import './Laptops.css';  
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList'; 


const category="Laptops" ;
const categoryUrl = `/${category.replace(/\s+/g, '-').toLowerCase()}`;
function Laptops() {
  return (
    <div className="laptops-container">    

<div className="breadcrumb">
        
        <Link to="/tech_shop">Main</Link>
        <span className="spans"> / </span>
        <Link style={{ color: '#0c0c0c' }} to={categoryUrl}>{category}</Link>
      </div>
      <ProductList 
         category={category}
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=2&subcategory_ids=4,5,13,14,15,16,17" 
      />
    </div>
  );
}

export default Laptops;
