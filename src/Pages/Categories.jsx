import React from "react";
import carpenterImg from "../assets/carpenter.png";
import makeupImg from "../assets/makeup.png";
import cleanerImg from "../assets/cleaner.png";

export default function Categories() {
  return (
    <section className="categories">
      <h2 className="categories-title">Huzzl Worker Categories</h2>
      <p className="categories-subtitle">
        Find professionals across different trades
      </p>

      <div className="categories-cards">
        <div className="category-card">
          <img src={carpenterImg} alt="Carpenter" />
          <h3>Carpenter</h3>
        </div>

        <div className="category-card">
          <img src={makeupImg} alt="Makeup artist" />
          <h3>Makeup artist</h3>
        </div>

        <div className="category-card">
          <img src={cleanerImg} alt="Cleaner" />
          <h3>Cleaner</h3>
        </div>
      </div>

      <button className="view-all">View all</button>
    </section>
  );
}
