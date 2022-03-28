import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <NavLink
      exact={props.exact}
      target={props.target}
      activeClassName="active-nav-link"
      rel={props.target ? "noreferrer" : ""}
      className="NavLinks"
      to={props.to}
    >
      <p>{props.title}</p>
    </NavLink>
  );
};

export default NavLinks;
