function Step({ step, currentStep, setCurrentStep }) {
    return (
      <div className="step">
        <div
          className={`step__circle ${currentStep >= step.id ? "bg_green" : ""}`}
          onClick={() => setCurrentStep(step.id)}
        >
          {step.id}
        </div>
        <div className="step__title">{step.title}</div>
      </div>
    );
  }

  
  export default Step