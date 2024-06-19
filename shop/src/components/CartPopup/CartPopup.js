import React from 'react';
import './CartPopup.css';

const CartPopup = ({ cartItems, toggleCart, removeFromCart }) => {
    // Calculate the total amount of the items in the cart
  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);


   // Handle click on overlay to close the cart popup
  const handleOverlayClick = () => {
    toggleCart();
  };

   // Prevent propagation of click events to avoid closing the popup when clicking inside it
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="overlay_" onClick={handleOverlayClick}>
      <div className="cart-popup-container">
        <div className="cartoverlay" onClick={handleOverlayClick}></div>
        <div className="cart-popup" onClick={handlePopupClick}>
           {/* Cart header with title and close button */}
          <div className="cart-header">
            <h2>Latest products in the order</h2>
            <button className="close-btn" onClick={toggleCart}>✕</button>
          </div>
            {/* List of items in the cart */}
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image_url} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">{item.price} $</span>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>✕</button>
              </div>
            ))}
          </div>
             {/* Footer with total amount and checkout button */}
          <div className="cart-footer">
            <div className="total-amount">
              <span>Subtotal: </span>
              <span className="amount">{totalAmount.toFixed(2)} $</span>
            </div>
            <button className="checkout-btn">Place an order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
