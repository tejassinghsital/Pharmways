import React from "react";
import "../css/InfoBar.css";

function InfoBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">About Us</li>
          <li className="navbar-item">FAQ</li>
          <li className="navbar-item">Help Desk</li>
          <li className="navbar-item">Contact Us</li>
        </ul>
        <div className="navbar-contact">Phone Number</div>
      </div>
    </nav>
  );
}

export default InfoBar;
