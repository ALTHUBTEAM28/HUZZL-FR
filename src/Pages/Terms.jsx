import React from "react";
import { useNavigate } from "react-router-dom";
import "./Terms.css";

const Terms = () => {
  const navigate = useNavigate();

  return (

    <div className="legal-container">
      <h1>Terms of Service</h1>

      <p className="last-updated">Last Updated: October 2025</p>

      <section>
        <h2>1. Overview</h2>
        <p>
          Welcome to <span>HUZZL</span>, a platform that connects vendors
          offering real services with clients who need them. By using Huzzl, you
          agree to these Terms of Service, which govern your access and use of
          our platform, mobile app, and related services.
        </p>
      </section>


      <section>
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use HUZZL. By creating an account,
          you confirm that the information you provide is accurate, complete,
          and truthful.
        </p>
      </section>

      <section>
        <h2>3. Account Responsibilities</h2>
        <p>
          Users are responsible for maintaining the confidentiality of their
          login credentials. Vendors and Clients must use their respective
          accounts HUZZL restricts using a vendor account to book services or
          a client account to offer services.
        </p>
      </section>

      <section>
        <h2>4. Vendor & Client Relationship</h2>
        <p>
          HUZZL provides the technology to connect vendors and clients but does
          not employ or represent vendors directly. Any agreements or disputes
          that arise from a service transaction are between the vendor and the
          client.
        </p>
      </section>


      <section>
        <h2>5. Bookings and Payments</h2>
        <p>
          Bookings, payments, and cancellations are managed through the app.
          Vendors are responsible for fulfilling accepted bookings, and clients
          must ensure payment completion. Refunds, if applicable, follow Huzzl's
          policy as outlined in our app.
        </p>
      </section>

      <section>
        <h2>6. Account Suspension or Termination</h2>
        <p>
          HUZZL reserves the right to suspend or deactivate any account involved
          in fraudulent, abusive, or misleading activities. Users can deactivate
          or permanently delete their accounts at any time under “Settings.”
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          HUZZL is not liable for direct or indirect damages arising from
          transactions between users. The platform provides a connection
          sevice, not a guarantee of vendor performance or client behavior.
        </p>
      </section>


      <section>
        <h2>8. Updates to Terms</h2>
        <p>
          These Terms may be updated occasionally. Continued use of HUZZL after
          an update means you accept the revised terms.
        </p>
      </section>


      <button className="back-btn" onClick={() => navigate("/signup")}>
         Back
      </button>
    </div>
  );
};

export default Terms;