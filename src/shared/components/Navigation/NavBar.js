import React, { useState } from "react";
import { NavLink as NabLink } from "react-router-dom";
import HoverControlledDropdown from "../../hooks/HoverControlledDropdown-hook";

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

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-5 pb-2">
      <Navbar
        light
        expand="md"
        fixed="top"
        style={{
          backgroundColor: "white",
          boxShadow: "2px 1px 2px black",
        }}
      >
        <NabLink
          className="navThing"
          exact
          to={"/"}
          activeClassName="activeNavLink"
        >
          <span role="img" aria-label="star-dust">
            {" "}
            🚀
          </span>
          Academo
        </NabLink>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NabLink
              className="navThing link-text"
              activeClassName="activeNavLink"
              to="/dashboard"
            >
              Cursos
            </NabLink>
          </Nav>
          <React.Fragment>
            <HoverControlledDropdown>
              <DropdownToggle>Nosotros</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/dashboard"
                  >
                    Mision/Vision
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/dashboard"
                  >
                    Valores
                  </NabLink>
                </DropdownItem>
              </DropdownMenu>
            </HoverControlledDropdown>
            <HoverControlledDropdown>
              <DropdownToggle>Contactenos</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/telefono"
                  >
                    Telefono
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/formulario"
                  >
                    Formulario de consultas
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/ubicacion"
                  >
                    Ubicacion
                  </NabLink>
                </DropdownItem>
              </DropdownMenu>
            </HoverControlledDropdown>

            <HoverControlledDropdown>
              <DropdownToggle>Blog</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog1"
                  >
                    Blog 1
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog2"
                  >
                    Blog 2
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog1"
                  >
                    Blog 3
                  </NabLink>
                </DropdownItem>
              </DropdownMenu>
            </HoverControlledDropdown>

            <HoverControlledDropdown>
              <DropdownToggle>Productos</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/productos/cocina"
                  >
                    Cocina
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog2"
                  >
                    Higiene Personal
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog1"
                  >
                    Lavanderia
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog1"
                  >
                    Pisos
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog1"
                  >
                    Industrial
                  </NabLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NabLink
                    className="navThing link-text"
                    activeClassName="activeNavLink"
                    to="/blog1"
                  >
                    Insumos
                  </NabLink>
                </DropdownItem>
              </DropdownMenu>
            </HoverControlledDropdown>

            {/*
                <NabLink
              className="navThing link-text"
              to={"/register"}
              activeClassName="activeNavLink"
            >
              <span className="blogoutUser order-success p-1">registro</span>
            </NabLink>
            <NabLink
              className="navThing link-text"
              to={"/login"}
              activeClassName="activeNavLink"
            >
              <span className="p-1">login </span>
            </NabLink>
 */}
          </React.Fragment>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
