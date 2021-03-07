import React from "react";
import Grid from "./Grid";
import './style.css';
import UniqloPage from "./UniqloPage";
import joyajeong from "./joyajeong.jpg";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
      <div className="App-header">
        <div className="profile-picture-crop">
          <img className="profile-picture" src={joyajeong} />
        </div>
        <h1 className="name">Joya Jeong</h1>
        <div className="intro">
          I'm a UNSW Information Systems/Commerce student that is an aspiring product
          and UI designer. Check out some of my work below!
        </div>
        <Grid />
      </div>
  );
}

export default Home;
