import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

export default function Header() {
  return (
      <div>
        <ul className="nav">
          <li>
            <Link to='/' className="active">Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Me</Link>
          </li>
        </ul>
      </div>
  );
}

//code used from https://reactrouter.com/web/example/basic
