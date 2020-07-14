import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";
import Backdrop from '../UIElements/Backdrop'
import logo from "../../../media/infinitelogo.png";

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
    
    {
      // 
      drawerIsOpen && <Backdrop onClick={closeDrawerHandler}> </Backdrop> }
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
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
      </MainHeader>
    </React.Fragment>
  );
};

export default Navigation;
