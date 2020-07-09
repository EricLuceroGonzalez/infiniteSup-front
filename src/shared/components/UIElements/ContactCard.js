import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ContactCard.css'

const ContactCard = (props) => {
  return (
    <div className="row flex cardBorder">
      <div className={`mr-3 ${props.color}`}>
        <FontAwesomeIcon icon={props.iconName} />
      </div>
      <div>{props.name}</div>
      {props.child}
    </div>
  );
};

export default ContactCard;

// <FontAwesomeIcon icon={faEnvelope} />
// <FontAwesomeIcon icon={faMapMarkedAlt} />
// <FontAwesomeIcon icon={faHeart} />
