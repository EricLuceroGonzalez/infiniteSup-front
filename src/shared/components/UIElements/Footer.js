import React from "react";
import ShowWindowDimensions from "../../hooks/ShowWindowDimensions-hook";

import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="col-12 footer-bar d-flex">
      <div className="col-12 col-sm-4">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "rgb(236, 27, 12)", marginRight: "8px" }}
        />
        Infinite Supplies, S.A.
      </div>
      <div className="col-6  col-sm-4">
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "8px" }} />
        infinitesupplies
      </div>
      <div className="col-6  col-sm-4">
        <FontAwesomeIcon
          icon={faPhoneAlt}
          style={{ color: "rgb(19, 245, 113)", marginRight: "8px" }}
        />
        (+507) 6291-7954
      </div>
    </div>
  );
};

export default Footer;

//
// #8f3985
// #b6a39e
// #efd9ce
// #470ff4
