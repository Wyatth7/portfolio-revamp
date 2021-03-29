import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <NavLink
      target={props.target}
      rel={props.target ? "noreferrer" : ""}
      className="NavLinks"
      to={props.to}
    >
      <p>{props.title}</p>
    </NavLink>
  );
};

export default NavLinks;
