import React from "react";
import {
  Link
} from "react-router-dom";

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
