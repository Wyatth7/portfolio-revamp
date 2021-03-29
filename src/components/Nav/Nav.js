import React from "react";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks/NavLinks";

const Nav = (props) => {
  return (
    <div className="Nav">
      <div className="theme-shift">
        <FontAwesomeIcon className="theme-icon" icon={solid.faMoon} />
      </div>
      <div className="links">
        <NavLinks title="Home" to="/" />
        <NavLinks title="Blog" to="/blog" />
        <NavLinks title="Projects" to="/projects" />
      </div>
    </div>
  );
};

export default Nav;
