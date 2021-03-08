import React from "react";
import Grid from "../components/Grid";
import '../style.css';
import joyajeong from "../images/joyajeong.jpg";

function Home() {
  document.title = "Joya Jeong's Portfolio"
  return (
      <div className="App-header">
        <div className="profile-picture-crop">
          <img className="profile-picture" src={joyajeong} alt="joya jeong picture" />
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
