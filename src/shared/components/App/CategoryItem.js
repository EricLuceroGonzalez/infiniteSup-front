import React, { useState } from "react";

import "./Categories.css";
import CatModal from "../UIElements/CatModal";

const CategoryItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const errorHandler = () => {
    setShowModal(false);
  };

  return (
    <div
      className="img-box img-hover-zoom col-6 col-sm-4 col-md-2"
      onClick={() => {
        setShowModal(!showModal);
        console.log(props.category);
        console.log(props.description);
      }}
    >
      <CatModal
        show={showModal}
        title={props.category}
        prodName={props.name}
        description={props.description}
        props={props.pros}
        sizes={props.sizes}
        fragance={props.frag}
        message={props.category}
        onClear={errorHandler}
      />
      <img
        className="card-img-top img-restr"
        src={props.imgsource}
        alt="Card cap"
      />
      <h4 className="card-title img-text">{props.category}</h4>
    </div>
  );
};

export default CategoryItem;
