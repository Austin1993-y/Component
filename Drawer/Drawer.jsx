import { useState } from "react";
import "./index.css";

function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="open-btn">
        Open Drawer
      </button>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h2>Menu</h2>
          <button onClick={() => setIsOpen(false)} className="close-btn">
            ✖
          </button>
        </div>
        <div className="drawer-content">{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
