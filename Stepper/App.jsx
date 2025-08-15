import React from "react";
import Stepper from "./Stepper";

function App() {
  const steps = [
    { id: 1, title: "Login" },
    { id: 2, title: "Shipping" },
    { id: 3, title: "Payment" },
    { id: 4, title: "Confirmation" },
  ];

  return (
    <div className="App">
      <Stepper steps={steps} />
    </div>
  );
}

export default App;
