import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../media/navlogo.png";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      {props.drawerOpen && (
        <NavLink to='/'>
        <div style={{ marginBottom: "90px" }}>
          {" "}
          <img
            className="logoSize"
            src={logo}
            alt="infinite supplies logo"
          ></img>
        </div>
        </NavLink>
      )}
      <li>
        <NavLink to="/nosotros" exact>
          NOSOTROS
        </NavLink>
      </li>
      <li>
        <NavLink to={`/productos`}>PRODUCTOS</NavLink>
      </li>
      <li>
        <NavLink to="/contacto">CONTÁCTENOS</NavLink>
      </li>
      <li>
        <NavLink to="/blog">BLOG</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
