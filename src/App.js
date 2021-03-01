import React from "react";
import Grid from "./Grid.js";
import Header from "./Header.js";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
