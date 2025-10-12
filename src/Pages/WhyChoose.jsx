import React from "react";
import verifiedImg from "../assets/verified.png";
import bookImg from "../assets/book.png";
import paymentsImg from "../assets/payments.png";
import areaImg from "../assets/area.png";

export default function WhyChoose() {
  return (
    <section className="why">
      <h2 className="why-title">Why Choose Huzzl?</h2>
      <p className="why-subtitle">
        Built for Nigerians who want services without stress.
      </p>

      <div className="why-cards">
        <div className="card">
          <img src={verifiedImg} alt="Verified Professionals" />
          <h3>Verified Professionals</h3>
          <p>Every provider is vetted and reviewed.</p>
        </div>

        <div className="card">
          <img src={bookImg} alt="Book in Minutes" />
          <h3>Book in Minutes</h3>
          <p>Find help nearby and schedule instantly.</p>
        </div>

        <div className="card">
          <img src={paymentsImg} alt="Safe Payments" />
          <h3>Safe Payments</h3>
          <p>Escrow wallet or pay-at-venue, your call.</p>
        </div>

        <div className="card">
          <img src={areaImg} alt="Built for Your Area" />
          <h3>Built for Your Area</h3>
          <p>Designed with Nigerian users in mind.</p>
        </div>
      </div>
    </section>
  );
}
