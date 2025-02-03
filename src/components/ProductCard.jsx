import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <div className="product-buttons">
        <button onClick={() => addToCart(product)} className="add-to-cart-button">
          Add to Cart
        </button>
        <Link to={`/products/${product.id}`} className="buy-now-button">
          Buy Now
        </Link>
      </div>
    </div>
  );
}