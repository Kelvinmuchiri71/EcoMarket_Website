import { useEffect, useState } from "react";
import "../styles/Home.css";

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecomarket-api.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <img src="/main.png.jpg" alt="Hero" className="hero-image" />
        <h1 className="hero-title">Welcome to EcoMarket</h1>
        <p className="hero-subtitle">Discover our latest products and offers</p>
        <button className="hero-button">Shop Now</button>
      </section>
      <h1 className="home-title">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}