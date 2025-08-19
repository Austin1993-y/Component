import { useState } from "react";
import "./index.css";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      
      <div className={`collapse-content ${isOpen ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}
