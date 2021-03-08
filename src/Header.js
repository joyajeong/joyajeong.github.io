import React from "react";
import {
  Link,
  NavLink
} from "react-router-dom";

export default function Header() {
  console.log("header");
  return (
      <div>
        <ul className="nav">
          <li>
            <NavLink exact to='/'
              activeStyle={{
                color: '#282c34',
                backgroundColor: '#c4c9d2',
                borderColor: '#c4c9d2',
                borderStyle: 'solid',
                borderWidth: 'thin'
              }}
            >Home</NavLink>
          </li>
          <li>
            <NavLink to='/contact'
              activeStyle={{
                color: '#282c34',
                backgroundColor: '#c4c9d2',
                borderColor: '#c4c9d2',
                borderStyle: 'solid',
                borderWidth: 'thin'
              }}
            >Contact Me</NavLink>
          </li>
        </ul>
      </div>
  );
}

//code used from https://reactrouter.com/web/example/basic
