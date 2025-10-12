import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ step }) => {
  const steps = [1, 2, 3];


  return (
    <div className="progress-bar">
      {steps.map((s) => (
        <div
          key={s}
          className={`progress-step ${step >= s ? "active" : ""}`}
        ></div>
      ))}
    </div>

  );

};


export default ProgressBar;

