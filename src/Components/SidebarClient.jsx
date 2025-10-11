import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SidebarClient.css";

const SidebarClient = () => {
  return (
    <aside className="sidebar-client">
      <h2>Workspace</h2><nav>
        <NavLink to="/client-dashboard" className={({isActive}) => isActive ? "active" : ""}> <img src="/Images/dashboard.svg" alt="dashboard" />Dashboard</NavLink>
        <NavLink to="/client-bookings" className={({isActive}) => isActive ? "active" : ""}> <img src="/Images/booking.svg" alt="info" />Bookings</NavLink>
        <NavLink to="/client-messages" className={({isActive}) => isActive ? "active" : ""}> <img src="/Images/message.svg" alt="message" />Messages</NavLink>
        <NavLink to="/client-payments" className={({isActive}) => isActive ? "active" : ""}> <img src="/Images/credit-card.svg" alt="Payment" />Payments</NavLink>
        <NavLink to="/client-settings" className={({isActive}) => isActive ? "active" : ""}> <img src="/Images/settings.svg" alt="setting" />Settings</NavLink>
         <Link to="/"><img src="/Images/home.svg" alt="home" />Home</Link>
      </nav>
    </aside>
  );
};

export default SidebarClient;

