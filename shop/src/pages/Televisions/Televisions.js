import React from 'react';  
import './Televisions.css';  
import ProductList from '../../components/ProductList/ProductList'; 
import { Link } from 'react-router-dom';


const category="Televisions" ;
const categoryUrl = `/${category.replace(/\s+/g, '-').toLowerCase()}`;

function Televisions() {
  return (
    <div className="Televisions-container">    

<div className="breadcrumb">  
<Link to="/tech_shop">Main</Link>
        <span className="spans"> / </span>
        <Link style={{ color: '#0c0c0c' }} to={categoryUrl}>{category}</Link>
        </div>


      <ProductList 
        category="Televisions" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=5&subcategory_ids=9,10" 
      />
    </div>
  );
}

export default Televisions;
