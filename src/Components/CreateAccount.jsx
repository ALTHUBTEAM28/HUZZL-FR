import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./CreateAccount.css"
import ProgressBar from "./ProgressBar";


const CreateAccount = ({ onContinue }) => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    location: "Nigeria",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || !formData.name || !formData.password) {
      alert("All fields are required.");
    }

  if (formData.password.length < 12 || formData.password.length > 20) {
  alert("Password must be between 12-20 characters.");
  return;
  }

  if (onContinue) {
    onContinue(formData);
  }
};

  return (
<div className="page-create">
  <h2 className="access">Get access to over 100M+ <br/> clients who needs your services</h2>
   <div className="card-1">
      {/* logo*/}
       <div className="logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>

        <h2>Create an Account</h2>
            <ProgressBar step={1} />

            {/*form section */}
      <form onSubmit={handleSubmit}>
      
        
        {/*phone number*/}
        <label>Phone Number</label>
        <div className="phone-row">
          <select name="location" 
        value={formData.location} 
        onChange={handleChange}
        required>
          
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

{/* name*/}
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
        />
</div>

{/* location*/}
<div className="location">
        <label>Location</label>
        <select name="location" 
        value={formData.location} 
        onChange={handleChange}
        required>
          
          <option value="Nigeria">Nigeria</option>
          <option value="Ghana">Ghana</option>
          <option value="Kenya">Kenya</option>
        </select>
</div>
</div>

{/* password*/}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="************"
          value={formData.password}
          onChange={handleChange}
          minLength={12} 
          maxLength={20}
          required
        />

        <p className="character">At least 12 characters, no more than 20 characters.</p>
       
        <button type="submit" onClick={(e) => e.stopPropagation()}>Continue</button>
      </form>
      
      {/* login */}
<div className="sign-in">
  <p>Already have an account? <Link to="/login">Sign In</Link></p>
</div>

{/* privacy policy*/}
<div className="privacy">
  <p>By signing i confirm that i have carefully read and agree to the HUZZL</p>
  <p><a href="#">Privacy Policy and Terms of Services.</a></p>
</div>
    </div>
</div>
  );
};


export default CreateAccount;