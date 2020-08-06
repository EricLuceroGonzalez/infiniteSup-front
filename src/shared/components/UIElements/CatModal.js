import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import ModalCatalog from "./ModalCatalog";

const CatModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header={
        props.logo ? (
          <div className="col-12 row d-flex align-items-center">
            {/**<div className="col-4 col-md-2 bordeB">
              <img
                style={{ maxWidth: "45px" }}
                src={props.logo}
                alt="Card cap"
              />
            </div> */}
            <div className="col-6 col-md-8">
              <p>{props.title}</p>
            </div>
            <FontAwesomeIcon
              className="col-2 col-md-2 theAqua ml-auto"
              style={{
                fontSize: "1.75em",
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
    >
      <ModalCatalog category={props.title} products={props.products}/>
    </Modal>
  );
};

export default CatModal;