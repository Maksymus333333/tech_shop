import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ProductList.css';
import like from './../catalog_photo/like.svg';
import vek from './../../pages/ProductDetails/icons/Vector 1.svg';

const ProductList = ({ category, apiEndpoint, addToCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products data from the given API endpoint when component mounts or apiEndpoint changes
  useEffect(() => { 
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiEndpoint]); // Запускаємо цей ефект при зміні apiEndpoint

  const formatPrice = (price) => {
     // Format price to display as "$15 000"
    return `$${parseInt(price, 10).toLocaleString('en').replace(/,/g, ' ')}`;
  };

    // Calculate the discounted price
  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2); // Round to two decimal places
  };

    // Handle product click to navigate to the product details page
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
       {/* Header section with category title and back button */}
  <div className="smartphone2"> 
<Link to="/tech_shop">
  <img className="smartphone-child2" alt="" src={vek} />
  </Link>
      <div className="main_tx">{category}</div>
  </div>

      {/* List of products */}
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product_" onClick={() => handleProductClick(product.id)}>
            <img className="products_img" src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            {product.discount > 0 ? (
              <>
                 {/* Display original and discounted prices if there is a discount */}
                <div className="original_price">{formatPrice(product.price)}</div>
                <div className="discounted_price">
                  {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                </div>
                <div className="discount_tag">{product.discount}%</div>
              </>
            ) : (
              // Display only the main price if there is no discount
              <div className="main_price">{formatPrice(product.price)}</div>
            )}
            <div className="availabilitys">
              <div>In stock</div>
              <img className="icon_heart" alt="like" src={like} />
            </div>
              {/* Add to basket button */}
            <div className="button_basket">
              <div className="bask_">Add to basket</div>
            </div>
          </div>
        ))} 
      </div>
    </>
  );
};

export default ProductList;
