import React from 'react';  
import './Computers.css';  
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList'; 


const category="Computers" ;
const categoryUrl = `/${category.replace(/\s+/g, '-').toLowerCase()}`;

function Computers() {
  return (
    <div className="Computers-container">    


<div className="breadcrumb">  
<Link to="/tech_shop">Main</Link>
        <span className="spans"> / </span>
        <Link style={{ color: '#0c0c0c' }} to={categoryUrl}>{category}</Link>
        </div>


      <ProductList 
        category="Computers" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=3&subcategory_ids=6,18" 
      />
    </div>
  );
}

export default Computers;
