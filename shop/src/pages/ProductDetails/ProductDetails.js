// ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Імпортуємо CSS файл для стилізації

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

  return (
    <div className="container">
<div className="frame-parent">
<div className="smartphone-parent">
<div className="smartphone">
<div className="catalog-smartphone">
<div className="bread-crumbs">
<div className="kart_prod">
<span>Главная /</span>
<span className="spans">{` `}</span>
<span>Смартфоны</span>
<span className="spans1">{` `}</span>
<span>/</span>
<span className="spans2"> Карточка товара</span>
</div>
</div>
<div className="smartphone1">
<img className="smartphone-child" alt="" src="Vector 1.svg" />
<div className="kart_prod">Карточка товара</div>
</div>
</div>
</div>
<div className="frame-group">
<div className="img-parent">
<img className="img-icon" alt=""  src={product.image_url} />
<div className="catalog-smartphone">
<div className="choice">
<div className="apple-iphone-13">{product.name}</div> 
<div className="colors">
<div className="colors-child" />
<div className="colors-item" />
<div className="colors-inner" />
</div>
</div>
<div className="specifications">
<div className="specifications1">
<div className="kart_prod">Характеристики:</div>
<div className="specifications-product">
 
<div className="screen">
<div className="ram">
<p className="p"> {product.description}</p> 
</div> 
</div> 
</div>
</div> 
</div>
</div>
</div>
<div className="price-product-parent">
<div className="price-product">
<div className="price">
<div className="div20">{product.price} $</div>

</div>
</div>
<div className="basket-button">
<div className="div20">В корзину</div>
</div>
</div>
</div>
</div> 
</div>
</div>
  );
};

export default ProductDetails;
