import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };



  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
       <img src="/Images/Logo.png" alt="logo" className="logo-nav" />
      </div>


      {/* Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
       <li><Link to="vendor/:id" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/profile-page" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About us</Link></li>
      </ul>

      {/* Buttons */}
      <div className={`navbar-buttons ${isOpen ? "active" : ""}`}>
        <Link to="/login" className="btn login-btn" onClick={() => setIsOpen(false)}>Log In</Link>
        <Link to="/signup" className="btn signup-btn" onClick={() => setIsOpen(false)}>Sign Up</Link>
      <div className="ham-sub">
        <Link to="vendor/:id" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/profile-page" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About us</Link>
      </div>
      </div>


      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
}