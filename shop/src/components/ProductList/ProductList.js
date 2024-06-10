// ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';
import like from './../catalog_photo/like.svg';

const ProductList = ({ category, apiEndpoint, addToCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Робимо запит до вашого PHP скрипту для отримання даних
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiEndpoint]); // Запускаємо цей ефект при зміні apiEndpoint

  const formatPrice = (price) => {
    // Форматування ціни у вигляді "$15 000"
    return `$${parseInt(price, 10).toLocaleString('en').replace(/,/g, ' ')}`;
  };

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2); // Округлення до двох знаків після коми
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="dis_tx">{category}</div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product_" onClick={() => handleProductClick(product.id)}>
            <img className="products_img" src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            {product.discount > 0 ? (
              <>
                <div className="original_price">{formatPrice(product.price)}</div>
                <div className="discounted_price">
                  {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                </div>
                <div className="discount_tag">{product.discount}%</div>
              </>
            ) : (
              <div className="main_price">{formatPrice(product.price)}</div>
            )}
            <div className="availabilitys">
              <div>В наличии</div>
              <img className="icon_heart" alt="like" src={like} />
            </div>
            {/* Викликаємо функцію addToCart при натисканні на кнопку "В корзину" */}
            <div className="button_basket">
              <div className="bask_" onClick={() => addToCart(product)}>В корзину</div>
            </div>
          </div>
        ))} 
      </div>
    </>
  );
};

export default ProductList;
