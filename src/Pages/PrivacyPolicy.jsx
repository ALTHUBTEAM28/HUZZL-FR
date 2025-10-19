
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css";


const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: October 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          HUZZL values your trust and privacy. This Privacy Policy explains how
          we collect, use, and protect your personal information when you use
          our platform to connect vendors and clients.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>
          We collect information you provide directly (like name, email, phone,
          and service details) and data automatically from your device (like IP
          address, browser type, and usage patterns).
        </p>
      </section>

      <section>
        <h2>3. How HUZZL Use Your Information</h2>
        <ul>
          <li>To create and manage your Huzzl account</li>
          <li>To process bookings and payments</li>
          <li>To personalize your experience on our platform</li>
          <li>To communicate updates, offers, or support</li>
          <li>To improve the safety and reliability of our services</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Sharing</h2>
        <p>
          We do not sell or rent your data. Information is shared only when
          necessary,  for example, between clients and vendors for confirmed
          bookings, or with service providers that help us operate Huzzl.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          HUZZL uses encryption and secure storage to protect your data. While
          we take every precaution, no system is 100% secure, and you use our
          services at your own risk.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. You may also deactivate your account at any time through
          Settings.
        </p>
      </section>

      <section>
        <h2>7. Cookies</h2>
        <p>
          HUZZL uses cookies to enhance your user experience and analyze
          activity. You can disable cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. The latest version will always
          be available in your account settings or at huzzl.com/privacy.
        </p>
      </section>

      <button className="back-btn" onClick={() => navigate("/signup")}>
        Back
      </button>
    </div>
  );
};

export default PrivacyPolicy;



