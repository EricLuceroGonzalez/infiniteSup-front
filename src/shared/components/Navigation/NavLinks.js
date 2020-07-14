import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          NOSOTROS
        </NavLink>
      </li>
      <li>
        <NavLink to={`/places`}>PRODUCTOS</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">CONTÁCTENOS</NavLink>
      </li>
      <li>
        <NavLink to="/auth">BLOG</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
