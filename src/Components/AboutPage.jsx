import React, { useState } from "react";
import "./AboutPage.css";

const AboutPage = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    "How do I book a professional?",
    "How does Huzzl verify professionals?",
    "What payment options are available?",
    "Can I join as a service provider?",
    "What makes Huzzl different?",
  ];

  return (
    <div className="main-container">

      {/* Navbar */}
         <section className="about-section">
      <nav className="navbar">
       <div className="Logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <button className="get-started">Get Started</button>
      </nav>



      {/* About Section */}
   
        <div className="about-container">
          <div className="about-left">
            <h1>About Huzzl</h1>
        <h3 className="subtitle">Your Hustle, <br/>Made Easier.</h3>
        <p>
          HUZZL is a platform that connects Nigerians with trusted blue-collar
          professionals from beauty and wellness to home maintenance and
          essential trades. Designed for local convenience, it makes finding and
          booking verified service providers simple, fast, and reliable.
          HUZZL empowers workers to grow their businesses while giving clients
          stress-free access to the help they need all at the tap of a button.
          </p>
        <div className="about-right">
        <img src="/Images/barber.png" className="about-img" alt="logo"/>
      </div>
          </div>
      </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>

          <p>
            To empower skilled professionals with visibility and steady income
            while helping clients hire trusted experts effortlessly.
          </p>
        </div>

        <div className="vision">
          <h3>Our Vision</h3>

          <p>
            To be Nigeria's most reliable everyday services platform, where
            every hustle meets the right opportunity.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-list">
          {faqs.map((q, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              <span>{q}</span>
              <span className="plus">{active === index ? "+" : "+"}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Ready to simplify your service search?</h3>
        <p>
          Join thousands of satisfied users and find your perfect professional
          today
        </p>

        <div className="cta-buttons">
          <button className="cta-btn">Get Started</button>
          <button className="cta-btn2">Learn more</button>
        </div>
      </section>

<section className="subscribe-section">
  <div className="subscribe-inner">
  <div className="subscribe-left">
      <h3 className="stay">Stay Updated</h3>
  <p>Get the latest service tips and Huzzl updates</p>
</div>

<div className="subscribe-right">
  <form className="subscribe-form"
  onSubmit={(e) => {
    e.preventDefault();
  }}>
    <input type="email"
    placeholder="Enter your email"
    className="subscribe-input"
    required/>

    <button type="submit" className="subscribe-btn">
      <span>Subscribe</span>
    </button>
  </form>
  </div>
  </div>
  <p className="privacy-text">
    By subscribing, you agree to our <a href="/privacy">privacy policy.</a>
  </p>
</section>
<hr/>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">

          <div className="sector-1">
            <h4>Services</h4>
            <p>Plumbing</p>
            <p>Makeup</p>
            <p>Cleaning</p>
            <p>More services</p>
          </div>

          <div className="sector-2">
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>Download</p>
              <p>Services</p>
          </div>

          <div className="sector-3">
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
              <p>Press</p>
          </div>

          <div className="sector-4">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Contact</p>
            <p>FAQ</p>
              <p>Terms</p>
          </div>

     <div className="sector-5">
  <h4>Social Media Links</h4>
            <p> <img src="/Images/twitter.svg" alt="twitter"/> <img src="/Images/instagram.svg" alt="instagram"/>
           <img src="/Images/linkedin.svg" alt="linkedin"/></p>
</div>
        </div>
<hr/>
        <div className="footer-bottom">
          <div className="footer-logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>

         <p className="footer-copy">&copy;{new Date().getFullYear()}  Huzzl. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


export default AboutPage;

