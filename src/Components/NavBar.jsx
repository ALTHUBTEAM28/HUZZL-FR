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
      <div className="navbar-logo">
       <img src="/Images/Logo.png" alt="logo" className="logo-nav" />
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>


<div className={`mobile-menu $(isOpen ? "active" : ""}`}>     {/* Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About us</Link>
        </li>
      </ul>


      {/* Buttons */}
      <div className={`navbar-buttons ${isOpen ? "active" : ""}`}>
        <Link to="/login" className="btn login-btn" onClick={() => setIsOpen(false)}>
          Log In
        </Link>
        <Link to="/CreateAccount" className="btn signup-btn" onClick={() => setIsOpen(false)}>
          Sign Up
        </Link>
      </div>
      </div>
 
    </nav>
    
  );
}


       