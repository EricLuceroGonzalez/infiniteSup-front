import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ContactCard.css";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  if (props.href) {
    return (
      <div className="row flex cardBorder">
        <div className={`mr-3 ${props.color}`}>
          <FontAwesomeIcon icon={props.iconName} />
        </div>
        <Link
        className='link-Contact'
          // style={{ textDecoration: "none" }}
          to={{ pathname: props.href }}
          target="_blank"
        >
          {props.name}
        </Link>
        {props.child}
      </div>
    );
  } else {
    return (
      <div className={`row flex cardBorder`}
      onClick={props.onClick}>
        <div className={`mr-3 ${props.color}`}>
          <FontAwesomeIcon className={props.moveIt} icon={props.iconName} />
        </div>
        <div>{props.name}</div>
        {props.child}
      </div>
    );
  }
};

export default ContactCard;

// <FontAwesomeIcon icon={faEnvelope} />
// <FontAwesomeIcon icon={faMapMarkedAlt} />
// <FontAwesomeIcon icon={faHeart} />
