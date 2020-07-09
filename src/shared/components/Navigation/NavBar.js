import React, { useState, useEffect } from "react";
import { NavLink as NabLink } from "react-router-dom";

import logo from "../../../media/logo_sm_cut.png";
import HoverControlledDropdown from "../../hooks/HoverControlledDropdown-hook";
import "./Navbar.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const toggle = () => setIsOpen(!isOpen);

  const closeCollapsed = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    console.log(`isOpen: ${isOpen}`);
  };
  return (
    <div>
      <Navbar
        light
        expand="md"
        fixed="top"
        className="d-flex flex-row fontA navDiv"
      >
        <NabLink
          className="navThing"
          exact
          to={"/"}
          activeClassName="activeNavLink"
        >
          <img 
          className='logoSize'
          src={logo} alt="infinite supplies logo"></img>
          INFINITE SUPPLIES
        </NabLink>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NabLink
              className="navThing"
              activeClassName="activeNavLink"
              to="/dashboard"
            ></NabLink>
          </Nav>
          <React.Fragment>
            <div className="p-4 p-lg-1">
              <NabLink
                onClick={closeCollapsed}
                className="navThing"
                activeClassName="activeNavLink"
                to="/nosotros"
              >
                Nosotros
              </NabLink>
            </div>
            <HoverControlledDropdown className="fontA">
              <div className="p-4 p-lg-1">
                <DropdownToggle
                  activeClassName="activeNavLink"
                  className="drop-nav navThing navDiv"
                >
                  Productos
                </DropdownToggle>
              </div>
              <DropdownMenu>
                <DropdownItem>
                  <NabLink
                    className="navThing"
                    activeClassName="activeNavLink"
                    to="/productos/cocina"
                  >
                    Cocina
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing"
                    activeClassName="activeNavLink"
                    to="/productos/higiene"
                  >
                    Higiene Personal
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing"
                    activeClassName="activeNavLink"
                    to="/productos/lavanderia"
                  >
                    Lavandería
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing"
                    activeClassName="activeNavLink"
                    to="/productos/pisos"
                  >
                    Pisos
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing"
                    activeClassName="activeNavLink"
                    to="/productos/industrial"
                  >
                    Industrial
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing"
                    activeClassName="activeNavLink"
                    to="/productos/insumos"
                  >
                    Insumos
                  </NabLink>
                </DropdownItem>
              </DropdownMenu>
            </HoverControlledDropdown>
            <div className="p-4 p-lg-1">
              <NabLink
                onClick={closeCollapsed}
                activeClassName="activeNavLink"
                className="navThing"
                to="/contacto"
              >
                Contáctenos
              </NabLink>
            </div>
            <div className="p-4 p-lg-1">
              <NabLink
                onClick={closeCollapsed}
                className="navThing"
                activeClassName="activeNavLink"
                to="/blog"
              >
                Blog
              </NabLink>
            </div>
          </React.Fragment>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
