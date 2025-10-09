// src/HomePage.jsx
import './style.css';

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <img src="Logo.png" alt="Huzzl Logo" />
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </nav>
        <div className="nav-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Work Smart, <br /> Live Easy</h1>
          <p>
            Find trusted beauty, cleaning, and service pros near you – fast, reliable, no stress.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Book a PRO</button>
            <button className="secondary-btn">Sign up to work</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="image 1.svg" alt="Team of professionals" />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>Why Choose Huzzl?</h2>
        <p className="subtitle">Built for Nigerians who want services without stress.</p>

        <div className="features">
          <div className="feature-card">
            <img src="image 7.svg" alt="Verified Professionals" />
            <h3>Verified Professionals</h3>
            <p>Every provider is vetted and reviewed.</p>
          </div>

          <div className="feature-card">
            <img src="image 2.svg" alt="Book in Minutes" />
            <h3>Book in Minutes</h3>
            <p>Find help nearby and schedule instantly.</p>
          </div>

          <div className="feature-card">
            <img src="image 3.svg" alt="Safe Payments" />
            <h3>Safe Payments</h3>
            <p>Escrow wallet or pay-at-venue, your call.</p>
          </div>

          <div className="feature-card">
            <img src="image 4.svg" alt="Built for Your Area" />
            <h3>Built for Your Area</h3>
            <p>Designed with Nigerian users in mind.</p>
          </div>
        </div>
      </section>

      {/* Find It Section */}
      <section className="find-it">
        <div className="find-container">
          <div className="find-text">
            <h2>
              Find it. Book it.<br />
              Get it done,<br />
              all in one place.
            </h2>
            <p>
              From finding trusted providers to booking and paying, Huzzl makes it easy, fast, and stress-free.
            </p>
          </div>

          <div className="find-features">
            <div className="feature-item">
              <i className="fa-solid fa-location-dot"></i>
              <p>Instantly find and book trusted service providers near you with our real-time map, filters, and ratings.</p>
            </div>

            <div className="feature-item">
              <i className="fa-solid fa-bell"></i>
              <p>Post your request and let skilled workers come to you. No searching needed.</p>
            </div>

            <div className="feature-item">
              <i className="fa-solid fa-file-lines"></i>
              <p>View detailed profiles with reviews, ratings, credentials, and past work—so you book with confidence.</p>
            </div>

            <div className="feature-item">
              <i className="fa-solid fa-calendar-days"></i>
              <p>Book instantly by choosing a time from the provider’s calendar—confirmation sent automatically via SMS or WhatsApp.</p>
            </div>

            <div className="feature-item">
              <i className="fa-solid fa-medal"></i>
              <p>See genuine reviews and ratings, with top workers earning badges for proven quality and trust.</p>
            </div>

            <div className="feature-item">
              <i className="fa-solid fa-handshake"></i>
              <p>Pay in person while we track your booking. Providers get notified, and we confirm once the job’s done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <h2>Testimonials</h2>

          <div className="testimonial-content">
            <div className="testimonial-text">
              <h3>Tope, Lagos</h3>
              <p className="role">Entrepreneur</p>

              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>

              <p className="quote">
                “I found a cleaner in less than 10 minutes. She came on time and did a great job — 
                I don’t think I’ll ever go back to asking neighbors!”
              </p>

              <div className="profile-buttons">
                <button className="active">
                  <i className="fa-solid fa-user-circle"></i> Tope, Lagos
                  <span>Entrepreneur</span>
                </button>
                <button>
                  <i className="fa-solid fa-user-circle"></i> Sandra, Ikeja
                  <span>Makeup Artist</span>
                </button>
                <button>
                  <i className="fa-solid fa-user-circle"></i> Aisha, Lagos
                  <span>Product Designer</span>
                </button>
                <button>
                  <i className="fa-solid fa-user-circle"></i> Akinola, Oyo
                  <span>Civil Servant</span>
                </button>
              </div>
            </div>

            <div className="testimonial-image">
              <img src="Frame 71.png" alt="Tope from Lagos" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
