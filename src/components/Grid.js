import React from "react";
import '../style.css';
import nutri from "../images/nutri.png";
import uniqlo from "../images/uniqloCover.png";
import study from "../images/study.png";
import {
  Link
} from "react-router-dom";

function Grid() {
  return (
    <div className="grid-container" id="test">
        <div className="container">
            <div className="grid-item">
              <Link to='/study@'>
                <img className="resize" src={study} alt="study@" />
                <div className="overlay">
                  <div className="text">UI Design: Study@ Prototype</div>
                </div>
              </Link>
          </div>
        </div>
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
