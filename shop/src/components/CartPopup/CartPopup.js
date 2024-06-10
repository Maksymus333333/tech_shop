import React, { useState } from 'react';
import './CartPopup.css';

const CartPopup = ({ cartItems, toggleCart }) => {
  const [cartProducts] = useState(cartItems);

  const totalAmount = cartProducts.reduce((total, item) => total + item.price, 0);

  const handleOverlayClick = () => {
    toggleCart();
  };

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="overlay_" onClick={handleOverlayClick}>
      <div className="cart-popup-container">
        <div className="cartoverlay" onClick={handleOverlayClick}></div>
        <div className="cart-popup" onClick={handlePopupClick}>
          <div className="cart-header">
            <h2>Останні товари в замовленні</h2>
            <button className="close-btn" onClick={toggleCart}>✕</button>
          </div>
          <div className="cart-items">
            {cartProducts.map((product, index) => (
              <div className="cart-item" key={index}>
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{product.name}</span>
                  <span className="cart-item-price">{product.price}  $</span>
                  <span className="cart-item-quantity">Quantity: {product.quantity}</span>
                </div>
                <button className="remove-btn">✕</button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="total-amount">
              <span>Загалом на суму: </span>
              <span className="amount"> {totalAmount}  $</span>
            </div>
            <button className="checkout-btn">Оформити замовлення</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
