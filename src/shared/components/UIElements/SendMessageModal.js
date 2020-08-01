import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { Link, useHistory } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "./LoadingSpinner";
import "./sendMessageModal.css";

const SendMessageModal = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [description, setDescrition] = useState(props.description);
  const [isMail, setIsMail] = useState(false);
  const [mailReturn, setMailReturn] = useState();
  const history = useHistory();

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
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

  useEffect(() => {
    console.log(props.setMedia);
    console.log(isMail);

    if (props.setMedia === "email") {
      setIsMail(true);
    } else {
      setIsMail(false);
    }
    console.log(formState.inputs);
    return () => {
      console.log("getting out!");

      setIsMail(false);
    };
  }, [props, isMail, formState]);

  const sendWhatsApp = () => {
    console.log(`formState.inputs.message: ${formState.inputs.message.value}`);
    let chatMessage = encodeURIComponent(formState.inputs.message.value);
    console.log(chatMessage);
  };
  const SendMessage = async (event) => {
    const formData = new FormData();
    console.log(`ismail: ${isMail}`);
    console.log(formState.inputs);

    if (isMail) {
      // let messageName = formState.inputs.name.value;
      // let messageEmail = formState.inputs.email.value;
      // let messageBody = formState.inputs.message.value;
      formData.append("name", formState.inputs.name.value);
      formData.append("email", formState.inputs.email.value);
      formData.append("message", formState.inputs.message.value);
      await console.log(formData);

      // event.preventDefault();
      try {
        const sendMail = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/mailing/send`,
          "POST",
          JSON.stringify({
            message: formState.inputs.message.value,
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
          }),
          { "Content-Type": "application/json" }
        );
        setMailReturn(sendMail.message);
        // setMailReturn()
      } catch (err) {
        console.log(`Error que xopa ahi loco, ${err}`);
      }
    }
  };
  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
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
            {!isMail && (
              <Button
                disabled={!formState.isValid}
                href={
                  formState.inputs.message.isValid
                    ? `https://wa.me/+50769825076?text=%F0%9F%94%B4%20INFINITE%20SUPPLIES%0A%0AMensaje%20de%3A%20${formState.inputs.name.value}%20%0A%0A${formState.inputs.message.value}`
                    : ""
                }
              >
                Enviar <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            )}
            {isMail && (
              <Button disabled={!formState.isValid} onClick={SendMessage}>
                Enviar <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            )}
          </div>
        }
      >
        <div className="col-12 col-sm-8 mb-3">
          <div className="row d-flex col-12">
            <div className="col-2">
              {" "}
              <FontAwesomeIcon
                style={{ fontSize: "2.35rem" }}
                className="theAqua"
                icon={isMail ? faEnvelope : faWhatsapp}
              />
            </div>
            <div className="col-10">
              {" "}
              Envía un mensaje a nuestro{" "}
              {isMail ? "correo electrónico:" : "WhatsApp:"}
            </div>
          </div>
        </div>
        <div>
          {mailReturn ? (
            <div className="col-12 mr-auto ml-auto dancingmessage">
              Mensaje enviado{" "}
              <span role="img" aria-label="rocket" style={{ color: "#06d6a2" }}>
                📥
              </span>
            </div>
          ) : (
            " "
          )}
          <Input
            id="name"
            element="input"
            type="text"
            label="Nombre"
            placeholder="Dejanos tu nombre..."
            validators={[
              VALIDATOR_REQUIRE,
              VALIDATOR_MINLENGTH(4),
              VALIDATOR_MAXLENGTH(60),
            ]}
            errorText="Introduce un nombre (al menos 4 caracteres)"
            onInput={inputHandler}
          />
          {isMail && (
            <Input
              id="email"
              element="input"
              type="text"
              label="Email"
              placeholder="Tu correo..."
              validators={[VALIDATOR_REQUIRE, VALIDATOR_EMAIL()]}
              errorText="Introduce un email correcto"
              onInput={inputHandler}
            />
          )}
          <Input
            id="message"
            element="textarea"
            type="text"
            label="Mensaje"
            placeholder="Escribe el mensaje que tengas para nosotros..."
            validators={[
              VALIDATOR_REQUIRE,
              VALIDATOR_MINLENGTH(5),
              VALIDATOR_MAXLENGTH(2000),
            ]}
            errorText="Escribe un mensaje"
            onInput={inputHandler}
          />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default SendMessageModal;
