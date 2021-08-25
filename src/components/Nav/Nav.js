import React from "react";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks/NavLinks";
import ExternalNavLink from "./NavLinks/ExternalNavLink/ExternalNavLink";

const Nav = (props) => {
  return (
    <div className="Nav">
      <div className="wrapper">
        <button onClick={() => props.themeChange()} className="theme-shift">
          <FontAwesomeIcon
            className="theme-icon"
            icon={props.isDark ? solid.faSun : solid.faMoon}
          />
        </button>
        <div className="links">
          <NavLinks title="Home" to="/" />
          <NavLinks title="Projects" to="/projects" />
          <ExternalNavLink title="GitHub" to="https://github.com/Wyatth7" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
