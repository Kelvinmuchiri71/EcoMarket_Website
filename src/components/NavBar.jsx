import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "../styles/NavBar.css";

export default function NavBar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          EcoMarket
        </NavLink>
        <div className="navbar-center-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            About
          </NavLink>
        </div>
        <div className="navbar-right-links">
          <NavLink
            to="/add-product"
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            Add Product
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          >
            Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}