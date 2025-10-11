import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleVendorLogin = (e) => {
    e.preventDefault();
    console.log("Vendor Login Data:", formData);
    navigate("/vendor-dashboard");
  };


  const handleClientLogin = (e) => {
    e.preventDefault();
    console.log("Client Login Data:", formData);
    navigate("/client-dashboard");
  };

  return (
    <div className="signin-container">
      {/* Left side with worker image and logo */}
      <div className="signin-left">
        <img src="/Images/Logo.png" alt="logo" className="logo-huzzl" />
        <img src="/Images/worker.png" alt="Worker" className="signin-image" />
        <Link to="/" className="back-link">
          Back to Website
          <span>
            <img src="/Images/arrow right.svg" alt="arrow" />
          </span>
        </Link>
      </div>


      {/* Right side with form */}
      <div className="signin-right">
        <h2>Log In to Your Account</h2>

        {/* Social login */}
        <div className="social-login">
          <button className="google">
            <span className="google-icon">
              <img src="/Images/google.png" alt="google-logo" />
            </span>
            <span className="google-signin">Log in with Google</span>
          </button>

          <button className="apple">
            <span className="apple-icon">
              <img src="/Images/apple.png" alt="apple-logo" />
            </span>
            <span className="apple-signin">Log in with Apple</span>
          </button>
        </div>

        {/* Divider */}
        <div className="divider"></div>
        <p className="or-text">or log in by using email address</p>

        {/* Form */}
        <form>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Two separate login buttons */}
          <div className="login-buttons">
            <button className="signin-btn vendor" onClick={handleVendorLogin}>
              Login as Vendor
            </button>
            <button className="signin-btn client" onClick={handleClientLogin}>
              Login as Client
            </button>
          </div>
        </form>


        {/* Signup link */}
        <p className="signup-text">
          Don't have an account? <Link to="/create-account">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};


export default Login;

