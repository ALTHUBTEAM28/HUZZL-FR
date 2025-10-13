import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      
<section className="subscribe-section2">
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
    className="subscribe-input2"
    required/>

    <button type="submit" className="subscribe-btn2">
      <span>Subscribe</span>
    </button>
  </form>
  </div>
  </div>
  <p className="privacy-textt">
    By subscribing, you agree to our <a href="/privacy">privacy policy.</a>
  </p>
</section>
<hr/>
      {/* Footer */}
      <footer className="footer-sector">
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
        <div className="footer-bottom2">
          <div className="footer-logo">
        <img src="/Images/Logo.png" alt="logo"/>
      </div>

         <p className="footer-copy">&copy;{new Date().getFullYear()}  Huzzl. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
