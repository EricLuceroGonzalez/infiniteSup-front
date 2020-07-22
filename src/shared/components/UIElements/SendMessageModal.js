import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUndoAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Modal from "./Modal";
import Button from "./Button";

const SendMessageModal = (props) => {
  const [description, setDescrition] = useState(props.description);

  return (
    <Modal
      //   onCancel={props.onClear}
      header={
        <div className="col-12 d-flex align-items-center">
          <div className="col-8 col-md-8">
            <p>{props.title}</p>
          </div>
          <FontAwesomeIcon
            className="col-3 col-md-4 theAqua ml-auto"
            style={{
              fontSize: "1.95em",
            }}
            onClick={props.closeModal}
            icon={faTimes}
          />
        </div>
      }
      show={props.show}
      footer={
        <div>
          <Button onClick={props.onClear}>
            {" "}
            <FontAwesomeIcon icon={faUndoAlt} />
          </Button>
          <Button onClick={props.onClear}>Enviar</Button>
        </div>
      }
    >
      <div className="col-12 col-sm-4">
        <FontAwesomeIcon
          icon={props.setMedia === "whatsapp" ? faWhatsapp : faEnvelope}
        />
      </div>

      <textarea rows="4"></textarea>
    </Modal>
  );
};

export default SendMessageModal;
