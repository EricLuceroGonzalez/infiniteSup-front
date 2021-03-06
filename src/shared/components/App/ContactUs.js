import React, { useState, useEffect } from "react";
import {
  faPhoneAlt,
  faEnvelope,
  faPencilAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import Map from "../UIElements/Map";
import "./ContactUs.css";
import ContactCard from "../UIElements/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UIElements/Button";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SendMessageModal from "../UIElements/SendMessageModal";
import logo_small from "../../../media/logo_sm_cut.png";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [setMedia, setSetMedia] = useState("");

  const errorHandler = () => {
    setShowModal(false);
  };

  const openCloseModal = (a) => {
    setSetMedia(a);
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
    <Helmet>
        <title>Infinite Supplies | Contáctanos</title>
        <meta
          name="description"
          content="Los mejores productos de limpieza para la industria y el hogar. Contáctanos via email o whatsApp en esta pagina."
        />
      </Helmet>
      <SendMessageModal
        show={showModal}
        setMedia={setMedia}
        closeModal={() => openCloseModal()}
        onClear={errorHandler}
        title={"Contáctanos:"}
      />
      <div className="row d-flex mt-5 col-12">
        <div className="col-12 col-sm-8 pb-4">
          <h5>Contacto</h5>
          <ContactCard
          onClick={() => {
            window.location.href = "tel:(+507) 6291-7954";
          }}
            color="theAqua"
            iconName={faPhoneAlt}
            name="(+507) 6291-7954"
            moveIt={'phoneVibrate'}
          />
          <ContactCard
            color="theLightBlue"
            iconName={faEnvelope}
            href="mailto: ericlucero501@gmail.com"
            name="info@infinite-supplies.com"
          />
          <ContactCard
          color="theLightBlue-b"
          iconName={faPhoneAlt}
          name="(+507) 382- 8846/47"
        />
          <ContactCard
            color="thePurple"
            iconName={faInstagram}
            href="https://www.instagram.com/infinitesuppliessa/"
            name="@infinitesuppliessa"
          />
          <ContactCard
            color="theLightBlue"
            iconName={faPencilAlt}
            name="Escríbenos:"
          />
          <div
            style={{
              fontFamily: "Montserrat-Bold",
            }}
          >
            <Button
              animate="animate-btn"
              onClick={() => {
                openCloseModal("email");
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Correo
            </Button>
            <Button
              animate="animate-btn"
              onClick={() => {
                openCloseModal("whatsapp");
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </Button>
          </div>
        </div>
        <div className="col-12 col-sm-4 mt-3">
          <div className="col-12">
            <FontAwesomeIcon
              className="jumpingSign"
              color="#DD4B3E"
              icon={faMapMarkerAlt}
            />
            {"  "}
            Ubicación
          </div>
          <div className="col-12 map-container">
            <Map center={{ lat: 9.0716298, lng: -79.5208301 }} zoom={17} />
          </div>
        </div>
      </div>
      <div className="col-12 mt-5 mb-4">
        <img width="100px" src={logo_small} alt="brand logo as footer"></img>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
