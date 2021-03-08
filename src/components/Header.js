import React from "react";
import {
  Link,
  NavLink
} from "react-router-dom";

export default function Header() {
  const style = {
    color: '#282c34',
    backgroundColor: '#c4c9d2',
    borderColor: '#c4c9d2',
    borderStyle: 'solid',
    borderWidth: 'thin'
  }

  return (
      <div>
        <ul className="nav">
          <li>
            <NavLink exact to='/'
              activeStyle={style}
            >Home</NavLink>
          </li>
          <li>
            <NavLink to='/contact'
              activeStyle={style}
            >Contact Me</NavLink>
          </li>
          <li>
            <a href="https://github.com/joyajeong/joyajeong.github.io">
              Github
            </a>
          </li>
        </ul>
      </div>
  );
}

//code used from https://reactrouter.com/web/example/basic
