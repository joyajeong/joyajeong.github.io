import React from "react";
import './style.css';
import nutri from "./nutri.png";
import uniqlo from "./uniqlo.png";
import UniqloPage from "./UniqloPage";
import NutriPage from "./NutriPage";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";

function Grid() {
  return (
    <div className="grid-container">
        <div className="container">
          <div className="grid-item">
            <Link to='/uniqlo'>
              <img className="resize" src={uniqlo} alt="uniqlo" />
              <div className="overlay">
                <div className="text">UI Design: UNIQLO App Redesign</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="grid-item">
            <Link to='/nutri'>
              <img className="resize" src={nutri} alt="nutri" />
              <div className="overlay">
                <div className="text">UI Design: Nutri Prototype</div>
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Grid;
