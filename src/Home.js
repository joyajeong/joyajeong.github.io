import React from "react";
import Grid from "./Grid.js";

function Home() {
  return (
      <div className="App-header">
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
