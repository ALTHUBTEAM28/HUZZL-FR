import React from "react";

export default function HowItWorks() {
  return (
    <section className="how">
      <h2 className="work">How Huzzl Works</h2>
      <h4 className="simple">Simple steps to connect with the right professionals</h4>
      <div className="steps">
      <div className="step">
                <h3>Search</h3>
                <h4>Browse Professionals in Your Area</h4>
                <p>Find experts matching your specific service needs.</p>
               <button className="btn-secondary">Start Searching</button>
              </div>
      
              <div className="step">
                <h3>Book</h3>
                <h4>Schedule Your Service</h4>
                <p>Select convenient time slots and confirm booking.</p>
                  <button className="btn-secondary2">Book Now</button>
              </div>
      
              <div className="step">
                <h3>Complete</h3>
                <h4>Enjoy Your Service</h4>
                <p>Receive high-quality services and leave feedback.</p>
                  <button className="btn-secondary">Share Experience</button>
              </div>
               </div>
    </section>
  );
}
