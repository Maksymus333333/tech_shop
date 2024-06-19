import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './DiscountList.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import like from './../catalog_photo/like.svg';


const DiscountList = () => {
    // State for products
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

   // Fetch products on component mount
  useEffect(() => {
    fetch('http://localhost/my-store-api/index.php')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

   // Format price to display with commas
  const formatPrice = (price) => {
    return `$${parseInt(price, 10).toLocaleString('en').replace(/,/g, ' ')}`;
  };

  // Calculate the discounted price
  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2);
  };

    // Filter products to only those with a discount
  const discountedProducts = products.filter(product => product.discount > 0);

   // Handle clicking on a product
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
     {/* Header for the discount section */}
      <div className="dis_txt">Shares</div>
      <Slider {...settings} className="discount-list">
        {discountedProducts.map(product => (
          <div
            key={product.id}
            className={`product ${product.type}`}
            onClick={() => handleProductClick(product.id)}
          >
            <div className="product_image_container">
              <img className="dis_product-img" src={product.image_url} alt={product.name} />
            </div>
            <div className="product_content_">
              <h2>{product.name}</h2>
              {product.discount > 0 ? (
                <>
                     {/* Display original price */}
                  <div className="original-price">{formatPrice(product.price)}</div>
                  {/* Display discounted price */}
                  <div className="discounted-price">
                    {formatPrice(calculateDiscountedPrice(product.price, product.discount))}
                  </div>
                   {/* Display discount tag */}
                  <div className="discount-tag">{product.discount}%</div>
                </>
              ) : (
                <p>{formatPrice(product.price)}</p>
              )}
              <div className="availability">
                <div>In stock</div>
                <img className="icon-heart" alt="like" src={like} />
              </div>
              <div className="button-basket">
                <div className="bask">Add to basket</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default DiscountList;