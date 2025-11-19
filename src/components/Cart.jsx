import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart({ cart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-title">{item.title}</h2>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-button"
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-button"
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <p>Total: <span className="total-amount">${total.toFixed(2)}</span></p>
            </div>
            <div className="cart-actions">
              <button className="checkout-button">Proceed to Checkout</button>
              <Link to="/" className="continue-shopping">Continue Shopping</Link>
            </div>
          </div>
        </>
      )}
     
    </div>
  );
}