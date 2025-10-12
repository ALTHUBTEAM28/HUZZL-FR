import React from "react";
import heroImg from "../assets/hero.png"; // place an image in src/assets

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Work Smart, <br/><span>Live Easy</span>
        </h1>
        <p>
          Find trusted handymen, cleaners, and more with ease. Simplify your
          service search today.
        </p>
        <button className="btn-primary">Book a PRO</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="Huzzl worker" />
      </div>
    </section>
  );
}
