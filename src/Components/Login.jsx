import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";



const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };


  return (
    <div className="signin-container">
           
      {/* Left side with worker-image and huzzl logo */}
      <div className="signin-left">
         <img src="/Images/Logo.png" alt="logo"
             className="logo-huzzl" />
        <img src="/Images/worker.png" alt="Worker" className="signin-image" />
        <Link to="/about" className="back-link">Back to Website 
        <span> <img src="/Images/arrow right.svg"/> </span></Link>
      </div>



      {/* Right side with form */}
      <div className="signin-right">
        <h2>Log In to Your Account</h2>

        {/*social login */}
        <div className="social-login">
          <button className="google">
            <span className="google-icon"><img src="/Images/google.png" alt="google-logo"/></span>
            <span className="google-signin">Log in with Google</span></button>
         
          <button className="apple">
             <span className="apple-icon"> <img src="/Images/apple.png" alt="apple-logo"/></span>
             <span className="apple-signin">Log in with Apple</span></button>
        </div>

        {/* black line*/}
<div className="divider"></div>
        <p className="or-text">or log in by using email address</p>

        {/* form*/}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* password*/}
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signin-btn">Continue</button>
        </form>

        {/* sign-up link*/}
        <p className="signup-text">
          Don't have an account? <Link to="/create-account">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;