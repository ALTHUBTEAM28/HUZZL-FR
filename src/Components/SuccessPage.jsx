import React from "react";
import "./SuccessPage.css";

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        
        {/* logo*/}
        <div className="huzzl-logo">
          <img src="/Images/Logo.png" alt="Huzzl Logo" className="logo" />
        </div>
        <div className="checkmark"><span> <img src="/Images/check.svg"/> </span></div>
        <h2>Your account has been setup!</h2>
        <p>
          We've been busy behind the scenes, making sure your huzzl experience
          is as smooth and authentic as it should be. Here's what we've done:
          Squashed pesky bugs, so nothing gets in the way of your real moments.
        </p>
        <button className="explore-btn">Explore</button>
      </div>
    </div>
  );
};

export default SuccessPage;






