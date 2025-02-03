import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../styles/Products.css";

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetch("https://ecomarket-api.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Latest Products</h1>
      <div className="filter-buttons">
        <button
          onClick={() => handleFilter("All")}
          className={activeFilter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleFilter("men's clothing")}
          className={activeFilter === "men's clothing" ? "active" : ""}
        >
          Men's Clothing
        </button>
        <button
          onClick={() => handleFilter("women's clothing")}
          className={activeFilter === "women's clothing" ? "active" : ""}
        >
          Women's Clothing
        </button>
        <button
          onClick={() => handleFilter("jewelery")}
          className={activeFilter === "jewelery" ? "active" : ""}
        >
          Jewelery
        </button>
        <button
          onClick={() => handleFilter("electronics")}
          className={activeFilter === "electronics" ? "active" : ""}
        >
          Electronics
        </button>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}