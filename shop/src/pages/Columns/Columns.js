import React from 'react';  
import './Columns.css';  
import ProductList from '../../components/ProductList/ProductList'; 
import { Link } from 'react-router-dom';


const category="Columns" ;
const categoryUrl = `/${category.replace(/\s+/g, '-').toLowerCase()}`;


function Columns() {
  return (
    <div className="Columns-container ">    

<div className="breadcrumb">  
<Link to="/tech_shop">Main</Link>
        <span className="spans"> / </span>
        <Link style={{ color: '#0c0c0c' }} to={categoryUrl}>{category}</Link>
        </div>

      <ProductList 
        category="Columns" 
        apiEndpoint="http://localhost/my-store-api/lap.php/products?category_id=6&subcategory_ids=11,12" 
      />
    </div>
  );
}

export default Columns;
