import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import Button from "./Button";

const CatModal = (props) => {
  const [description, setDescrition] = useState(props.description);
  useEffect(() => {
    console.log("\n\ninside Modal");
    console.log(`show: ${props.show}`);
    console.log(props.message);
  });

  const renderDesc = () => {
    description.map((item) => {
      return <p>{item}</p>;
    });
  };
  return (
    <Modal
      onCancel={props.onClear}
      header={props.title}
      show={props.show}
      footer={
        <div>
          <Button onClick={props.onClear}>
            {" "}
            <FontAwesomeIcon icon={faUndoAlt} />
          </Button>
          <Button onClick={props.onClear}>Saber más</Button>
        </div>
      }
    >
      <div>
        <h3>{props.prodName}</h3>
        <div className="col-12">
          <img
            src="https://dummyimage.com/200x80/850285/82ad00&text=Imagen+del+producto"
            alt="product illustration"
          ></img>
        </div>
        {props.description.length > 1 ? (
          <ul style={{ fontSize: "0.7em" }}>
            {" "}
            <li>{props.description[0]}</li>
            <li>{props.description[1]}</li>
          </ul>
        ) : (
          <p style={{ fontSize: "0.7em" }}>{props.description[0]}</p>
        )}
        <div>
          {props.sizes ? "Tamaños:" : ""}
          {props.sizes.length > 2 ? (
            <div className="row d-flex">
              <div className="col-6">{props.sizes[0]}</div>
              <div className="col-6">{props.sizes[1]}</div>
              <div className="col-6">{props.sizes[2]}</div>
              <div className="col-6">{props.sizes[3]}</div>
            </div>
          ) : (
            <p>{props.sizes[0]}</p>
          )}
        </div>
        <p>{props.fragance ? "Con Fragancia" : "Sin Fragancia"}</p>
      </div>
    </Modal>
  );
};

export default CatModal;
