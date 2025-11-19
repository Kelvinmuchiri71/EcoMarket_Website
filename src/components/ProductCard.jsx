import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  const imgBase = (product.image || '').split('?')[0];
  const placeholder = '/placeholder.svg';

  return (
    <div className="product-card">
      <img
        src={product.image || placeholder}
        srcSet={`${imgBase}?w=400 400w, ${imgBase}?w=800 800w`}
        sizes="(max-width:600px) 100vw, 300px"
        alt={product.title || 'Product image'}
        loading="lazy"
        className="product-image"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = placeholder;
          e.currentTarget.srcset = '';
        }}
      />

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