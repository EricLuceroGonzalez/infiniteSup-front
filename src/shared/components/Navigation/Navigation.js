import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import logo from "../../../media/navlogo.png";

const Navigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Function to handle openDrawerHandler
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  // Close the sideDrawer at click an backdrop
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}> </Backdrop>}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks drawerOpen={drawerIsOpen} />
        </nav>
      </SideDrawer>
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">
            <img
              className="logoSize"
              src={logo}
              alt="infinite supplies logo"
            ></img>
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <button
        className="main-navigation__menu-btn ml-auto"
        onClick={openDrawerHandler}
      >
        <span className='spanUp'></span>
        <span className='spanMid'></span>
        <span className='spanDow'></span>
      </button>

      </MainHeader>
    </React.Fragment>
  );
};

export default Navigation;
