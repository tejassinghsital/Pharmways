import React from "react";
import "../css/NavBar.css";
import searchIcon from "../assets/searchIcon.png";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-bar-logo-container">
          <img src="/path/to/logo.png" alt="Logo" className="nav-bar-logo" />
        </div>
        <div className="nav-bar-items">
          <div className="nav-bar-dropdown">
            <button className="nav-bar-dropbtn">Categories</button>
            <div className="nav-bar-dropdown-content">
              {/* Categories dropdown content */}
            </div>
          </div>
          <div className="nav-bar-item">Promotions</div>
          <div className="nav-bar-item">New</div>
        </div>
        <div className="nav-bar-search-container">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="nav-bar-search-icon"
          />
          <input
            type="text"
            placeholder="Search Product"
            className="nav-bar-search-input"
          />
        </div>
        <div className="nav-bar-cart-icon">
          <img src="/path/to/cart-icon.png" alt="Cart Icon" />
        </div>
        <div className="nav-bar-login-button">Login</div>
      </div>
    </nav>
  );
}

export default NavBar;
