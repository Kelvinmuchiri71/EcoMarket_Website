import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddProduct.css";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title, price: parseFloat(price), description, image };

    fetch("https://ecomarket-api.onrender.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="add-product-container">
      <h1 className="add-product-title">Add Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="add-product-input"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="add-product-input"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="add-product-textarea"
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="add-product-input"
          required
        />
        <button type="submit" className="add-product-button">
          Add Product
        </button>
      </form>
    </div>
  );
}