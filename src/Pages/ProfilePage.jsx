// src/pages/ProfilePage.jsx
import "./ProfilePage.css"; // 👈 make sure you copy your CSS into this file

function ProfilePage() {
  return (
    <div className="profile-card">
      {/* Header Section */}
      <div className="header">
        <div className="profile-info">
          <div className="profile-pic">
            <img src="Images/Ellipse 8.svg" alt="Profile Picture" />
          </div>
          <div className="profile-details">
            <h1>Johnson</h1>
            <div className="badge">Certified Plumber</div>
            <div className="location">
              Lagos, Nigeria • 10+ years of experience
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary">Hire Me</button>
          <button className="btn btn-secondary">Message</button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio">
          <div className="portfolio-item">
            <img src="Images/Rectangle 47.svg" alt="Portfolio Image" />
            <div className="portfolio-label">Bathroom Sink Fix</div>
          </div>
          <div className="portfolio-item">
            <img src="Images/Rectangle 48.svg" alt="Portfolio Image" />
            <div className="portfolio-label">Kitchen Sink Fix</div>
          </div>
          <div className="portfolio-item">
            <img src="Images/Rectangle 49.svg" alt="Portfolio Image" />
            <div className="portfolio-label">Water Heater Repair</div>
          </div>
        </div>

        <h2 className="section-title">Reviews & Ratings</h2>
        <div className="reviews-header">
          <span className="stars">⭐</span>
          <span className="rating-text">4.8 / 5.0</span>
        </div>

        <div className="review">
          <img
            src="Images/Ellipse 6.svg"
            alt="Reviewer Picture"
            className="reviewer-pic"
          />
          <div className="review-content">
            <div className="review-header">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <div className="review-date">April 20, 2024</div>
            </div>
            <div className="review-text">
              Great experience working with Johnson. Very professional. Fixed my
              plumbing issue quickly and explained everything clearly. I'll
              definitely hire again.
            </div>
          </div>
        </div>

        <div className="review">
          <img src="Images/7.svg" alt="Reviewer Picture" className="reviewer-pic" />
          <div className="review-content">
            <div className="review-header">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <div className="review-date">March 17, 2024</div>
            </div>
            <div className="review-text">
              Skilled and reliable. The job took a bit longer than expected, but
              the quality of work was excellent.
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h3>Ready to work together?</h3>
        <button className="btn btn-primary">Hire Me Today</button>
      </div>
    </div>
  );
}

export default ProfilePage;
