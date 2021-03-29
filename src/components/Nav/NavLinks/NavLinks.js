import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <NavLink className="NavLinks" to={props.to}>
      <p>{props.title}</p>
    </NavLink>
  );
};

export default NavLinks;
