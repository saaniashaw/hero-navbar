import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
