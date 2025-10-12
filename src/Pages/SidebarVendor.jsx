import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SidebarVendor.css";

const SidebarVendor = () => {
  return (
    <div className="sidebar-vendor">
      <div className="logo-container">
      <img src="/Images/Logo.png" alt="logo" className="logo-dash" />
        </div>
      <nav>
        <NavLink to="/vendor-dashboard" activeclassname="active">
         <img src="/Images/dashboard.svg" alt="dashboard" /> Dashboard
        </NavLink>
        <NavLink to="/vendor-jobs" activeclassname="active">
          <img src="/Images/file.svg" alt="job" />My Jobs
        </NavLink>
        <NavLink to="/vendor-reviews" activeclassname="active">
           <img src="/Images/review.svg" alt="review" /> Reviews
        </NavLink>
        <NavLink to="/vendor-portfolio" activeclassname="active">
        <img src="/Images/portfolio.svg" alt="portfolio" />  Portfolio
        </NavLink>
        <NavLink to="/vendor-earnings" activeclassname="active">
         <img src="/Images/earning.svg" alt="earning" /> Earnings
        </NavLink>
        <NavLink to="/vendor-settings" activeclassname="active">
         <img src="/Images/settings.svg" alt="setting" /> Settings
        </NavLink>
        <Link to="/"><img src="/Images/home.svg" alt="home" />Home</Link>
              
      </nav>
    </div>
  );
};

export default SidebarVendor;





