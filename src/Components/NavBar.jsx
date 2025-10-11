import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Huzzl</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile-page">Profile fri</Link>
        </li>
        <li>
          <Link to="/vendor/:id">Profile</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>

      <div className="navbar-buttons">
        <Link to="/login" className="btn login-btn">
          Log In
        </Link>
        <Link to="/create-account" className="btn signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
