import React, { useState } from "react";

import "./Categories.css";
import CatModal from "../UIElements/CatModal";

const CategoryItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const errorHandler = () => {
    setShowModal(false);
  };

  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="img-box img-hover-zoom col-6 col-sm-4 col-md-2">
      <CatModal
        show={showModal}
        closeModal={() => openCloseModal()}
        title={props.category}
        products={props.products}
        onClear={errorHandler}
      />

      <img
        onClick={() => {
          setShowModal(!showModal);
        }}
        className="card-img-top img-restr homeLogo"
        src={props.logo}
        alt="Card cap"
      />
      <h4 className="card-title img-text">{props.category}</h4>
    </div>
  );
};

export default CategoryItem;
