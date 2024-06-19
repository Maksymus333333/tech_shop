import React from 'react';  
import './Tablets.css';  
import ProductList from '../../components/ProductList/ProductList'; 
import { Link } from 'react-router-dom';


const category="Tablets" ;
const categoryUrl = `/${category.replace(/\s+/g, '-').toLowerCase()}`;

function Tablets() {
  return (
    <div className="Tablets-container">    

<div className="breadcrumb">  
<Link to="/tech_shop">Main</Link>
        <span className="spans"> / </span>
        <Link style={{ color: '#0c0c0c' }} to={categoryUrl}>{category}</Link>
        </div>

      <ProductList 
        category="Tablets" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=4&subcategory_ids=7,8" 
      />
    </div>
  );
}

export default Tablets;
