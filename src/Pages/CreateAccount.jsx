import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";
import ProgressBar from "./ProgressBar";

const CreateAccount = ({ onContinue }) => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    location: "Nigeria",
    password: "",
    role: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { phone, name, password, role } = formData;
    if (!phone || !name || !password || !role) {
      alert("All fields are required.");
      return;
    }


    if (password.length < 12 || password.length > 20) {
      alert("Password must be between 12-20 characters.");
      return;
    }

    if (onContinue) onContinue(formData);
  };


  return (
    <div className="page-create">
      <h2 className="access">Get access to over 100M+ <br /> clients who needs your services</h2>
      <div className="card-1">
        <div className="logo">
          <img src="/Images/Logo.png" alt="logo" />
        </div>

        <h2 className="acct">Create an Account</h2>
        <ProgressBar step={1} />

        <form onSubmit={handleSubmit}>
          <label>Phone Number</label>
          <div className="phone-row">
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="+234 000-000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="side">
            <div className="full-name">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Olivia Smith"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>



            <div className="location">
              <label>Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >

                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
              </select>
            </div>
          </div>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="***********"
            value={formData.password}
            onChange={handleChange}
            minLength={12}
            maxLength={20}
            required
            autoComplete="new-password"
          />

          <p className="character">At least 12 characters, no more than 20 characters.</p>

         <label>Register As</label>
<div className="role-buttons">
  <button
    type="button"
    className={`role-btn ${formData.role === "client" ? "active" : ""}`}
    onClick={() => setFormData(p => ({ ...p, role: "client" }))}
  >
    Client
  </button>


  <button
    type="button"
    className={`role-btn ${formData.role === "vendor" ? "active" : ""}`}
    onClick={() => setFormData(p => ({ ...p, role: "vendor" }))}
  >
    Vendor
  </button>

  <input type="hidden" name="role" value={formData.role} />
</div>

          <button type="submit" className="continue-btn">Continue</button>
        </form>

        <div className="sign-in">
          <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>

        <div className="privacy">
          <p>By signing i confirm that i have carefully read and agree to the HUZZL</p>
          <p><Link to="/privacy">Privacy Policy</Link> and  <Link to="/terms">Terms of Services.</Link></p>
        </div>
      </div>
    </div>
  );
};


export default CreateAccount;

