import React, { useState } from "react";
import CatModal from "../../UIElements/CatModal";
import "./showProducts.css";
const ProductShow = (props) => {
    const [showModal, setShowModal] = useState(false);

    const errorHandler = () => {
        setShowModal(false);
      };
    
      const openCloseModal = () => {
        setShowModal(!showModal);
      };
    
  return (
    <div className="col-12 col-sm-6 col-lg-6 row d-flex">

      <CatModal
        show={showModal}
        closeModal={() => openCloseModal()}
        title={props.categoryName}
        products={props.products}
        onClear={errorHandler}
      />
      <div
        className="col-10 itemTitle justify-content-start align-items-center categoryBox d-flex"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <div className="col-4 col-sm-6 col-md-6 col-lg-3">
          <img
            className="productShowImg"
            src={props.fgLogo}
            alt={`category ${props.category} logo`}
          ></img>
        </div>
        <div
          style={{ textAlign: "left" }}
          className="align-middle categoryNameItem"
        >
          {props.category}
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
