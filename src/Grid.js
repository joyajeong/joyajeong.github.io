import React from "react";
import './style.css';
import lisa from "./lisa.jpg";
import angry from "./angry.jpg";

function Grid() {
  return (
    <div className="grid-container">
      <div className="container">
        <div className="grid-item">
          <img src={lisa} alt="angrey lisa" />
          <div className="overlay">
            <div className="text">UI Design: UNIQLO App Redesign</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid-item">
          <img src={angry} alt="angrey lisa2" />
          <div className="overlay">
            <div className="text">UI Design: Nutri Prototype</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid;
