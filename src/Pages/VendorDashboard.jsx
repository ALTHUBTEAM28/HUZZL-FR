import React, { useState } from "react";
import "./VendorDashboard.css";
import SidebarVendor from "./SidebarVendor";



const sampleJobs = [
  { client: "Amara Kene", location: "Lagos Mainland", status: "In Progress", amount: 15000 },
  { client: "Bayo Smith", location: "Ikeja", status: "Completed", amount: 10000 },
  { client: "Lola James", location: "Yaba", status: "Pending", amount: 5000 },
  { client: "Emeka Obi", location: "Surulere", status: "Completed", amount: 7000 },
  { client: "Chika Nwanze", location: "Lekki", status: "Active", amount: 8000 },
  { client: "Tomiwa Ayo", location: "Ajah", status: "Completed", amount: 6000 },

];

const sampleReviews = [
  { reviewer: "Client A", rating: 5, comment: "Excellent service!" },
  { reviewer: "Client B", rating: 4, comment: "Very professional and polite." },
  { reviewer: "Client C", rating: 5, comment: "On time and great work!" },
];



const VendorDashboard = () => {
  const [profileImage, setProfileImage] = useState("/images/default-avatar.jpg");
  const [jobs] = useState(sampleJobs);
  const [reviews] = useState(sampleReviews);

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };



  // Derived stats
  const jobsCompleted = jobs.filter((j) => j.status === "Completed").length;
  const pendingRequests = jobs.filter((j) => j.status === "Pending").length;
  const activeJobs = jobs.filter((j) => j.status === "In Progress" || j.status === "Active").length;
  const totalEarnings = jobs
    .filter((j) => j.status === "Completed")
    .reduce((sum, j) => sum + j.amount, 0);


  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0;


  return (
    <div className="vendor-dashboard">
      {/* Sidebar */}
      <SidebarVendor />

      {/* Main Dashboard */}
      <div className="vendor-main">
        {/* Header */}
        <div className="vendor-topbar">
          <h2>Dashboard</h2>
          <div className="vendor-profile">
            <img
              src={profileImage}
              alt="Vendor avatar"
              className="vendor-avatar clickable"
              onClick={() => document.getElementById("vendor-profile-upload").click()}
            />
            <input
              type="file"
              id="vendor-profile-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfileUpload}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Jobs Completed</h4>
            <h2>{jobsCompleted}</h2>
            <p>Star Rating: ⭐ {averageRating.toFixed(1)}</p>
          </div>
          <div className="stat-card">
            <h4>Earnings</h4>
            <h2>₦{totalEarnings.toLocaleString()}</h2>
            <p>Active Bookings: {activeJobs}</p>
          </div>

          <div className="stat-card">
            <h4>Pending Requests</h4>
            <h2>{pendingRequests}</h2>
            <p>Awaiting Approval</p>
          </div>
        </div>


        {/* Upcoming Jobs */}
        <div className="upcoming-jobs">
          <h3>Upcoming Jobs</h3>

          {jobs
            .filter((j) => j.status === "In Progress" || j.status === "Active")
            .map((job, index) => (
              <div className="job-card" key={index}>
                <div className="job-info">
                  <img src="/images/default-avatar.jpg" alt="client" className="job-avatar" />
                  <div>
                    <p className="job-client">{job.client}</p>
                    <p className="job-location">{job.location}</p>
                  </div>
                </div>

                <div className="job-status">
                  <span className={`status ${job.status.toLowerCase().replace(" ", "-")}`}>
                    {job.status}
                  </span>
                  <p className="job-comment">Currently handling {job.client}'s request...</p>
                </div>

                <div className="job-meta">
                  <p>{job.status}</p>
                  <p className="job-amount">₦{job.amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
        </div>

        {/* My Jobs Table */}
        <div className="my-jobs">
          <h3>My Jobs</h3>
          <div className="table">
            <div className="table-header">
              <div>Client</div>
              <div>Status</div>
              <div>Amount</div>
            </div>
            {jobs.map((job, i) => (
              <div className="table-row" key={i}>
                <div>{job.client}</div>
                <div>{job.status}</div>
                <div>₦{job.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews & Earnings */}
        <div className="reviews-earnings">
          <div className="reviews-section">
            <h3>Reviews</h3>
            {reviews.length > 0 ? (
              <>
                <p className="star-display">
                  {Array(Math.round(averageRating))
                    .fill("⭐")
                    .join(" ")}
                </p>
                {reviews.map((r, i) => (
                  <p key={i}>
                    <strong>{r.reviewer}:</strong> {r.comment}
                  </p>
                ))}
              </>
            ) : (
              <p>No reviews yet</p>
            )}
          </div>


          <div className="earnings-section">
            <h3>Earnings</h3>
            <p>Total: ₦{totalEarnings.toLocaleString()}</p>
            <p className="earnings-placeholder">More analytics coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;

