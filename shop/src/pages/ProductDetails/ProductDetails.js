import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import vek from './icons/Vector 1.svg';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/my-store-api/lap.php/product/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const calculateDiscountedPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  const handleAddToCart = () => {
    const priceToAdd = product.discount > 0
      ? calculateDiscountedPrice(product.price, product.discount)
      : product.price;

    addToCart({ ...product, price: priceToAdd });
  };

  const categoryUrl = `/${product.category.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="container">
      <div className="smartphone-parent">
        <div className="smartphone">
          <div className="catalog-smartphone">
            <div className="bread-crumbs">
              <div className="kart_prod_">
                <Link to="/tech_shop">Main</Link>
                <span className="spans"> / </span>   
                <Link to={categoryUrl}>{product.category}</Link>
                <span className="spans1"> / </span>
                <span className="spans2">Product card</span>
              </div>
            </div>
            <div className="smartphone1">
            <Link to={categoryUrl}>
            <img className="smartphone-child" alt="" src={vek} />
            </Link>
              <div className="kart_prod">Product card</div>
           
            </div>
          </div>
        </div>
        <div className="frame-group">
          <div className="img-parent">
            <img  className="img-icon" alt="" src={product.image_url} />
            {product.discount > 0 && (
              <div className="discount__tag">{product.discount}%</div>
            )}
            <div className="catalog-smartphone">
              <div className="choice">
                <div className="name">{product.name}</div>
              </div>
              <div className="specifications">
                <div className="specifications1">
                  <div className="features">Features:</div> 
                </div>
                <div className="description"> 
                  <div className="description-list">
                       {(product.description || '').split('\n').map((line, index) => (
                       <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="price-product-parent">
              <div className="price-product">
                <div className="price_d">
                  {product.discount > 0 ? (
                    <>
                      <div className="original__price">{product.price} $</div>
                      <div className="discounted_price">
                        {calculateDiscountedPrice(product.price, product.discount)} $
                      </div>
                    </>
                  ) : (
                    <div className="main_price">{product.price} $</div>
                  )}
                </div>
              </div>
              <div className="basket-button" onClick={handleAddToCart}>
                <div className="cart">Add to basket</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
