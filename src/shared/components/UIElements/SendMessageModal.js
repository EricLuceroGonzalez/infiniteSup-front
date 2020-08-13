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
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "./LoadingSpinner";
import "./sendMessageModal.css";

const SendMessageModal = (props) => {
  const { isLoading, sendRequest } = useHttpClient();
  const [isMail, setIsMail] = useState(false);
  const [mailReturn, setMailReturn] = useState(false);

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
    if (props.setMedia === "email") {
      setIsMail(true);
    }
    if (props.setMedia === "whatsapp") {
      setIsMail(false);
    }
    return () => {
      setIsMail(false);
    };
  }, [props, isMail, formState]);

  const SendMessage = async (event) => {
    const formData = new FormData();

    if (isMail) {
      formData.append("name", formState.inputs.name.value);
      formData.append("email", formState.inputs.email.value);
      formData.append("message", formState.inputs.message.value);
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
        setMailReturn(sendMail.emailSent);
        // setMailReturn()
      } catch (err) {
        console.log(`Error: ${err}`);
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
            <Button
              onClick={() => {
                setMailReturn(false);
                props.onClear();
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faUndoAlt} /> Atrás
            </Button>
            {!isMail && (
              <Button
                onClick={() => setMailReturn("false")}
                disabled={!formState.isValid}
                href={
                  formState.inputs.message.isValid
                    ? `https://wa.me/+50762917954?text=%F0%9F%94%B5%0A%20INFINITE%20SUPPLIES%0A%0AMensaje%20de%3A%20${formState.inputs.name.value}%20%0A%0A${formState.inputs.message.value}`
                    : ""
                }
              >
                Enviar <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            )}
            {isMail && (
              <Button
                disabled={!formState.isValid || mailReturn}
                onClick={SendMessage}
              >
                Enviar <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            )}
          </div>
        }
      >
        <div className="row d-flex col-12 col-lg-6 mr-auto ml-auto">
          <div className="col-2">
            {" "}
            <FontAwesomeIcon
              style={{ fontSize: "1.75rem" }}
              className="theAqua"
              icon={isMail ? faEnvelope : faWhatsapp}
            />
          </div>
          <div className="col-10 instructMessage">
            {" "}
            Envía un mensaje a nuestro{" "}
            {isMail ? "correo electrónico:" : "WhatsApp:"}
          </div>
        </div>

        <div className="formBox col-12 col-lg-8 mr-auto ml-auto">
          {!!mailReturn ? (
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
