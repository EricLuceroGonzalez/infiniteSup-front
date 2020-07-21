import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import Button from "./Button";
import ModalCatalog from "./ModalCatalog";

const CatModal = (props) => {
  const [description, setDescrition] = useState(props.description);
  useEffect(() => {
    // console.log("\n\ninside Modal");
    // console.log(`show: ${props.show}`);
    // console.log(props.message);
  });

  const renderDesc = () => {
    description.map((item) => {
      return <p>{item}</p>;
    });
  };
  return (
    <Modal
      // onCancel={props.onClear}
      header={
        props.logo ? (
          <div className="col-12 row d-flex">
            <div className="col-4 col-md-2">
              <img className="col-12 col-md-6" src={props.logo} alt="Card cap" />
            </div>
            <div className="col-6 col-md-8">{props.title}</div>
            <FontAwesomeIcon
              className="col-2 col-md-2 ml-auto theAqua"
              style={{
                fontSize: "2em",
              }}
              onClick={props.closeModal}
              icon={faTimes}
            />
          </div>
        ) : (
          ""
        )
      }
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
      <ModalCatalog category={props.title} />
    </Modal>
  );
};

export default CatModal;

// <div>
// <h3>{props.prodName}</h3>
// <div className="justify-content-end">
//   <div>{props.items} productos</div>
// </div>
// <div className="col-12">
//   <img
//     src="https://dummyimage.com/200x80/850285/82ad00&text=Imagen+del+producto"
//     alt="product illustration"
//   ></img>
// </div>
// {props.description  ? (
//   <ul style={{ fontSize: "0.7em" }}>
//     {" "}
//     <li>{props.description[0]}</li>
//     <li>{props.description[1]}</li>
//   </ul>
// ) : (
//   <p style={{ fontSize: "0.7em" }}>{props.description[0]}</p>
// )}
// <div>
//   {props.sizes ? "Tamaños:" : ""}
//   {props.sizes.length > 2 ? (
//     <div className="row d-flex">
//       <div className="col-6">{props.sizes[0]}</div>
//       <div className="col-6">{props.sizes[1]}</div>
//       <div className="col-6">{props.sizes[2]}</div>
//       <div className="col-6">{props.sizes[3]}</div>
//     </div>
//   ) : (
//     <p>{props.sizes[0]}</p>
//   )}
// </div>
// <p>{props.fragance ? "Con Fragancia" : "Sin Fragancia"}</p>
// </div>
