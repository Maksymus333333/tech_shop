import React, { useEffect, useState } from 'react';
import './DiscountList.css';
import like from './../catalog_photo/like.svg';

const DiscountList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Робите запит до вашого PHP скрипту для отримання даних
    fetch('http://localhost/my-store-api/index.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatPrice = (price) => {
    // Форматування ціни у вигляді "$15 000"
    return `$${parseInt(price, 10).toLocaleString('en').replace(/,/g, ' ')}`;
  };

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2); // Округлення до двох знаків після коми
  };

  // Фільтруємо товари зі знижкою
  const discountedProducts = products.filter(product => product.discount > 0);

  return (
    <>
      <div className="dis_txt">Акции</div>
      <div className="discount-list">
        {discountedProducts.map(product => (
          <div key={product.id} className={`product ${product.type}`}>
            <div className="product_image_container">
            <img className="dis_product-img" src={product.image_url} alt={product.name} />
            </div>
            <div className="product_content_">  
              <h2>{product.name}</h2>
              {product.discount > 0 ? (
                <>
                  <div className="original-price">{formatPrice(product.price)}</div>
                  <div className="discounted-price">
                    {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                  </div>
                  <div className="discount-tag">{product.discount}%</div>
                </>
              ) : (
                <p>{formatPrice(product.price)}</p>
              )}
              <div className="availability">
                <div>В наличии</div>
                <img className="icon-heart" alt="like" src={like} />
              </div>
              <div className="button-basket">
                <div className="bask">В корзину</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiscountList;
