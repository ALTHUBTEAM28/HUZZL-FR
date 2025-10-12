import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();


    if (!selectedRole) {
      alert("Please choose to continue as Client or Vendor.");
      return;
    }


    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });


      const data = await response.json();
      setLoading(false);


      if (!response.ok) {
        // Handle backend errors
        alert(data.message || "Login failed. Try again.");
        return;
      }


      // Check role
      if (data.user.role !== selectedRole) {
        alert("You do not have this type of account.");
        return;
      }


      // Successful login
      alert(`Welcome back, ${data.user.name}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(data.user));


      if (selectedRole === "client") navigate("/client-dashboard");
      else navigate("/vendor-dashboard");
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };


  return (
    <div className="login-container">
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



        <p className="or-text">or log in by using email address</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required

          />


          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />


          <div className="role-buttons">
            <button
              type="button"
              className={`role-btn ${selectedRole === "client" ? "active" : ""}`}
              onClick={() => setSelectedRole("client")}
            >
              Continue as Client
            </button>

            <button
              type="button"
              className={`role-btn ${selectedRole === "vendor" ? "active" : ""}`}
              onClick={() => setSelectedRole("vendor")}
            >
              Continue as Vendor
            </button>
          </div>


          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <Link to="/signup" className="signup">Sign Up</Link>
        </p>
      </div>
      </div>
      </div>
  );

};

export default Login;