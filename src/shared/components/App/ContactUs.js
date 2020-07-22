import React, { useEffect, useState } from "react";
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
import Button from "../UIElements/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SendMessageModal from "../UIElements/SendMessageModal";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [setMedia, setSetMedia] = useState('');

  const errorHandler = () => {
    setShowModal(false);
  };

  const openCloseModal = (a) => {
    console.log(a);
    setSetMedia(a)
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <SendMessageModal
        show={showModal}
        setMedia={setMedia}
        closeModal={() => openCloseModal()}
        onClear={errorHandler}
        title={"Mensaje"}
      />
      <div className="row d-flex mt-5 pt-5">
        <div className="col-12 col-sm-6 pb-4">
          <h5>Contacto</h5>
          <ContactCard
            color="theAqua"
            iconName={faPhone}
            name="(+507) 6666-9999"
          />
          <ContactCard
            color="theLightBlue-b"
            iconName={faEnvelope}
            name="info@infinite-supplies.com"
          />
          <ContactCard
            color="thePurple"
            iconName={faHeart}
            name="@instagram @twitter"
          />
          <ContactCard
            color="theLightBlue"
            iconName={faPencilAlt}
            name="Escríbenos"
          />
          <div style={{ fontFamily: "Montserrat-Bold" }}>
            <Button
              onClick={() => {
                openCloseModal("email");
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Correo
            </Button>
            <Button
              onClick={() => {
                openCloseModal("whatsapp");
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Whatsapp
            </Button>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-3">
          <div className="col-12">
            <FontAwesomeIcon color="#DD4B3E" icon={faMapMarkerAlt} />
            {"  "}
            Ubicación
          </div>
          <div className="col-12 map-container">
            <Map center={{ lat: 9.0716298, lng: -79.5208301 }} zoom={16} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
