import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <h1>Mwa Code</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a target="_blank"href="https://github.com/mwacode7/">Github</a>
              </li>
              <li>
                <a target="_blank"href="https://mwacode7.github.io/src/src.html">Sourcecode</a>
              </li>
              <li>
                <a target="_blank" href="http://mwahost.wpxube.com/">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
