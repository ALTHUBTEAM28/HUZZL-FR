import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VendorProfile.css";

const ReviewCard = ({ reviewerName, date, rating, comment }) => {
  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const emptyStars = 5 - fullStars;

    return (
      <div className="rating-stars">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star filled">
            ★
          </span>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">
            ★
          </span>
        ))}
      </div>
    );
  };


  return (
    <div className="review-card">
      <div className="review-header">
        <div className="reviewer-avatar"></div>
        <div className="review-info">
          <strong>{reviewerName}</strong>
          {renderStars(rating)}
        </div>
      </div>

      <p className="review-comment">"{comment}"</p>
      <span className="review-date">{date}</span>
    </div>
  );
};

const VendorProfile = ({ vendorData }) => {
  const [portfolioImages, setPortfolioImages] = useState(vendorData.portfolio || []);
  const [profileImage, setProfileImage] = useState(vendorData.avatarUrl || "");
  const [uploadError, setUploadError] = useState("");


  //  PROFILE PICTURE UPLOAD
  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setProfileImage(newImageUrl);
    }
  };


  //  FIXED PORTFOLIO UPLOAD (allows multiple uploads correctly)
  const handlePortfolioUpload = (event) => {
    const files = Array.from(event.target.files);


    // Prevent more than 3 total
    if (portfolioImages.length + files.length > 3) {
      setUploadError(" You can only upload up to 3 portfolio images!");
      event.target.value = ""; 
      return;
    }

    setUploadError(""); 


    // Convert selected files to previewable URLs
    const newImages = files.map((file) => ({
      title: file.name,
      imageUrl: URL.createObjectURL(file),
    }));


    // Add to previous state
    setPortfolioImages((prev) => [...prev, ...newImages]);


    // Reset input value so same file can be selected again
    event.target.value = "";
  };

  const handleHireMe = () => {
    alert(`Initiating hiring process for ${vendorData.name}!`);
  };


  return (
    <div className="vendor-profile-container">
      {/* --- Profile Header --- */}
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={profileImage || "/images/default-avatar.jpg"}
            alt="Profile"
            className="profile-avatar"
            onClick={() => document.getElementById("profile-upload").click()}
          />

          <input type="file"
          id="profile-upload"
          accept="image/*"
          onChange={handleProfileUpload}
          style={{display: "none"}}
          />
        </div>

        <div className="profile-info">
          <h2>{vendorData.name}</h2>
         <p className="vendor-title">{vendorData.title}</p>
          <p className="vendor-meta">
            {vendorData.location} · {vendorData.yearsExperience}+ years of experience
          </p>

          <div className="profile-buttons">
            <button className="hire" onClick={handleHireMe}>
              Hire Me
            </button>

            <button className="msg">Message</button>
          </div>
        </div>
      </div>


      {/* --- Portfolio Section --- */}
      <div className="portfolio-section">
        <h3>Portfolio</h3>
        <div className="portfolio-grid">
          {portfolioImages.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}


          {portfolioImages.length < 3 && (
            <div className="portfolio-upload">
              <label htmlFor="portfolio-upload" className="upload-label">
                <span>+</span> Add Photo
              </label>
              <input
                type="file"
                id="portfolio-upload"
                accept="image/*"
                multiple
                onChange={handlePortfolioUpload}
                style={{ display: "none" }}
              />
            </div>
          )}
        </div>


        {/* Inline Error Message */}
        {uploadError && <p className="upload-error">{uploadError}</p>}
      </div>


      {/* --- Reviews Section --- */}
      <div className="reviews-section">
        <h3>Reviews & Ratings</h3>
        <p className="overall-rating"><span> ★</span>{vendorData.rating} / 5.0</p>

        {vendorData.reviews.map((review, index) => (
          <ReviewCard
            key={index}
            reviewerName={review.reviewer}
            date={review.date}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </div>


      {/* --- Call to Action --- */}
      <div className="ready-section">
        <h3>Ready to work together?</h3>
        <button className="ready-btn" onClick={handleHireMe}>
          Hire Me Today
        </button>
         <Link to="/" className="back">Home</Link>
      </div>
    </div>
  );
};


export default VendorProfile;


export const exampleVendorData = {
  name: "Johnson",
  title: "Certified Plumber",
  location: "Lagos, Nigeria",
  yearsExperience: 10,
  rating: 4.8,
  avatarUrl: "/images/johnson_avatar.jpg",
  portfolio: [],
  reviews: [
    {
      reviewer: "User A",
      date: "April 20, 2024",
      rating: 5,
      comment:
        "Great experience working with Johnson. Very professional, fixed my plumbing issue quickly and explained everything clearly. I'd definitely hire again.",
    },
    {
      reviewer: "User B",
      date: "March 17, 2024",
      rating: 4,
      comment:
        "Skilled and reliable. The job took a bit longer than expected, but the quality of work was excellent.",
    },
  ],
};