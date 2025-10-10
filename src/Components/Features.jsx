import React from "react";

export default function Features() {
  return (
    <section className="features">
      
         <h2>Features and Benefits</h2>
      <div className="feature-grid">
       <div className="left">
      <h3>Find it. Book it. Get it done <br/> All in one place.</h3>
      <p>From finding trusted providers to booking and paying, HUZZL makes it easy, fast, and stress-free.</p>
       </div>
      <div className="right">
        <div className="feature">
          <p>Instantly find and book trusted services providers near you with 
            our real time map, filters, and ratings</p>
        </div>
        <div className="feature">
          <p>Post your request and let skilled workers come to you.
          No searching needed.</p>
        </div>
        <div className="feature">
          <p>View detailed profiles with reviews, ratings, credentials, and past work, so you book with confidence.</p>
        </div>
        <div className="feature">
          <p>Book instantly by choosing a time from the provider's 
            calendar, confirmation sent authomatically via SMS or WhatsApp.
          </p>
        </div>
        <div className="feature">
          <p>See genuine reviews and ratings, with top workers earning badges for proven
             quality and trust.
          </p>
        </div>
        <div className="feature">
          <p>Pay in person while we track your booking.
            Providers get notified, and we confirm once the job's done.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
