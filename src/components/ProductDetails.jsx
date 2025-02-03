import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductDetails.css";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/products/${id}')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.title} className="product-details-image" />
      <div className="product-details-info">
        <h1 className="product-details-title">{product.title}</h1>
        <p className="product-details-price">${product.price}</p>
        <p className="product-details-description">{product.description}</p>
        <div className="product-details-buttons">
          <button onClick={() => addToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
          <Link to="/cart" className="buy-now-button">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}