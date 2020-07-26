import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUndoAlt,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Modal from "./Modal";
import Button from "./Button";
import { useForm } from "../../hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_EMAIL,
} from "../../utils/validators";
import Input from "./Input";

const SendMessageModal = (props) => {
  const [description, setDescrition] = useState(props.description);

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <Modal
      onCancel={props.onClear}
      header={
        <div className="col-12 d-flex align-items-center">
          <div className="col-8 col-md-8">
            <h2>{props.title}</h2>
          </div>
        </div>
      }
      show={props.show}
      footer={
        <div className="d-flex justify-content-around mr-auto ml-auto p-3">
          <Button onClick={props.onClear}>
            {" "}
            <FontAwesomeIcon icon={faUndoAlt} /> Atrás
          </Button>
          <Button onClick={props.onClear}>
            Enviar <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </div>
      }
    >
      <div className="col-12 col-sm-8 mb-4"
      style={{padding: '60px 10px'}}>
        <FontAwesomeIcon
          icon={props.setMedia === "whatsapp" ? faWhatsapp : faEnvelope}
        />{" "}
        Envia un mensaje a nuestro{" "}
        {props.setMedia === "whatsapp" ? "WhatsApp:" : "correo electrónico:"}
        <Input
        id="name"
        element="input"
        type="text"
        label="Nombre"
        placeholder="Dejanos tu nombre..."
        validators={[
          VALIDATOR_REQUIRE,
          VALIDATOR_MINLENGTH(5),
          VALIDATOR_MAXLENGTH(100),
        ]}
        errorText="Introduce un valor correcto"
        onInput={inputHandler}
      />
        <Input
          id="email"
          element="textarea"
          type="text"
          label="Mensaje"
          placeholder="Escribe el mensaje que tengas para nosotros..."
          validators={[
            VALIDATOR_REQUIRE,
            VALIDATOR_MINLENGTH(5),
            VALIDATOR_MAXLENGTH(100),
          ]}
          errorText="Escribe un mensaje"
          onInput={inputHandler}
        />
      </div>
    </Modal>
  );
};

export default SendMessageModal;
