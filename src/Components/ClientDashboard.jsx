import React, { useState } from "react";
import "./ClientDashboard.css";
import SidebarClient from "./SidebarClient";

const ClientDashboard = () => {
  const [profileImage, setProfileImage] = useState("/images/default-avatar.jpg");
  const [activeTab, setActiveTab] = useState("Ongoing");

  // sample bookings data
  const bookings = [
    { job: "Package delivery", worker: "Jason", status: "Scheduled", category: "Ongoing" },
    { job: "Furniture repair", worker: "Kemi", status: "In progress", category: "Ongoing" },
    { job: "Wall painting", worker: "Tunde", status: "Upcoming", category: "Upcoming" },
    { job: "Home cleaning", worker: "Aisha", status: "Upcoming", category: "Upcoming" },
    { job: "Cake design", worker: "Ria Events", status: "Completed", category: "Completed" },
    { job: "Decor setup", worker: "Zayn Decor", status: "Completed", category: "Completed" },
  ];

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfileImage(url);
  };

  const filteredBookings = bookings.filter((b) => b.category === activeTab);

  // stats
  const stats = {
    active: 5,
    pending: 1,
    completed: 5,
    totalSpent: 24000, 
  };

  // buttons handlers (placeholder functionality)
  const handleFindWorker = () => console.log("Navigating to Find Worker...");
  const handlePostJob = () => console.log("Navigating to Post Job...");
  const handleContactSupport = () => console.log("Opening Support Chat...");

  return (
    <div className="client-dashboard-container">
      {/* Sidebar */}
      <SidebarClient />

      {/* Main Content */}
      <div className="client-main">
        {/* Header */}
        <div className="client-header">
          <div className="client-header-text">
            <h4>Client</h4>
            <h2>
              Welcome back, <span>Johnson</span>
            </h2>
          </div>

          <div className="client-header-avatar">
            <img
              src={profileImage}
              alt="Profile"
              className="client-avatar clickable"
              onClick={() => document.getElementById("client-upload").click()}
            />

            <input
              id="client-upload"
              type="file"
              accept="image/*"
              onChange={handleProfileUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="client-stats">
          <div className="stat-box">
            <h3>{stats.active}</h3>
            <p>Active Bookings</p>
          </div>

          <div className="stat-box">
            <h3>{stats.pending}</h3>
            <p>Pending requests</p>
          </div>

          <div className="stat-box">
            <h3>{stats.completed}</h3>
            <p>Completed jobs</p>
          </div>

          <div className="stat-box">
            <h3>₦{stats.totalSpent.toLocaleString()}</h3>
            <p>Total spent</p>
          </div>
        </div>


        {/* Bookings and Messages */}
        <div className="client-bookings-section">

          {/* Left side: My Bookings */}
          <div className="bookings-left">
            <h3>My Bookings</h3>

            {/* Tabs */}
            <div className="bookings-tabs">
              {["Ongoing", "Upcoming", "Completed"].map((tab) => (
                <span
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Table */}
            <div className="bookings-table">
              <div className="table-row table-head">
                <div>Job</div>
                <div>Worker</div>
                <div>Status</div>
              </div>

              {filteredBookings.map((item, i) => (
                <div className="table-row" key={i}>
                  <div>{item.job}</div>
                  <div>{item.worker}</div>
                  <div>{item.status}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="client-buttons">
              <button className="btn-primary" onClick={handleFindWorker}>
                Find worker
              </button>
              <button className="btn-outline" onClick={handlePostJob}>
                Post job
              </button>
              <button className="btn-outline" onClick={handleContactSupport}>
                Contact support
              </button>
            </div>
          </div>

          {/* Right side: Messages */}
          <div className="messages-right">
            <h3>Messages</h3>
            <div className="message-box">
              <p>
                Just getting started with the work. I'll provide you with regular
                updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;