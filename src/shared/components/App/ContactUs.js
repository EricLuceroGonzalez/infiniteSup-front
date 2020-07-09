import React, { useEffect } from "react";
import {
  faPhone,
  faEnvelope,
  faHeart,
  faPencilAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import Map from "../UIElements/Map";
import "./ContactUs.css";
import ContactCard from "../UIElements/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = () => {
  useEffect(() => {
    if (!window.google) {
      console.log("------------------  no window.google==========");
    }
  }, []);
  // const map = () => {
  //   new window.google.maps.Map(document.getElementById("map"), {
  //     center: { lat: 41.0082, lng: 28.9784 },
  //     zoom: 8,
  //   });
  // };
  return (
    <React.Fragment>
      <h2 className="hed">Contacto</h2>
      <div className="d-flex">
        <div className="flex col-12 col-sm-6">
          <ContactCard
            color="theAqua"
            iconName={faPhone}
            name="(+507) 6666-9999"
          />
          <ContactCard
            color="theLightBlue-b"
            iconName={faEnvelope}
            name="correoelectronico@infinitesupplies.com"
          />
          <ContactCard
            color="thePurple"
            iconName={faHeart}
            name="@instagram @ twitter"
          />
          <ContactCard
            color="theLightBlue"
            iconName={faPencilAlt}
            name="Escríbenos"
          />
        </div>
        <div className="col-12 col-sm-6">
          <div className="row d-flex">
            <div className="col-12">
            <FontAwesomeIcon color='#DD4B3E' icon={faMapMarkerAlt}/>
            {"  "}
            Ubicación</div>
            <div className="col-12 map-container">
              <Map center={{ lat: 9.0716298, lng: -79.5208301 }} zoom={16} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
