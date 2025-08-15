import React, { useState } from "react";
import "./index.css";
import Step from "./Step";

export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(1);

  const progressWidth =
    steps.length > 1 ? (currentStep - 1) * (100 / (steps.length - 1)) : 0;
    console.log(progressWidth)

  return (
    <div className="newstepper">
      <div className="stepper__container">
        {steps.map((step) => (
          <Step
            key={step.id}
            step={step}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        ))}
      </div>
      <div className="progress__line">
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>
      </div>
    </div>
  );
}

