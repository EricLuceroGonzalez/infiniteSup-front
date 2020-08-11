import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import EditProduct from "./EditProduct";
import { useForm } from "../shared/hooks/form-hook";
import Input from "../shared/components/UIElements/Input";
import { VALIDATOR_REQUIRE } from "../shared/utils/validators";

const ProductDashboard = (props) => {
  const [categoryProds, setCategoryProds] = useState(props.category);
  const [showModal, setShowModal] = useState(false);


  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      name: {
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

  const openCloseModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    console.log('------------');
    
    console.log(formState);
  }, [formState]);

  // <EditProduct 
  // show={showModal}
  // onClear={openCloseModal}
  // prodName={item} />
  return (
    <div className="col-12 mr-auto ml-auto">
      <h4>{categoryProds.categoryName}</h4>
      {categoryProds.products.map((item, k) => {

        return (
          <div key={k} className="col-12 col-lg-8 product-box row d-flex">

            <div
              className="edit-button col-2"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              <FontAwesomeIcon icon={faEdit} /> Editar
            </div>
            {showModal ? <h5 className="col-12">{item.name}</h5> : (
              <Input
              id="title"
              element="input"
              type="text"
              label="Nombre"
              value={'item.name'} 
              // placeholder={`m${formState.inputs.name.value} Dejanos tu nombre...`}
              validators={[
                VALIDATOR_REQUIRE,
              ]}
              errorText="Introduce un nombre (al menos 4 caracteres)"
              onInput={inputHandler}
              />)}
            <div className="col-12 col-md-4">
              <img
                className="imgDashboard"
                src={item.image}
                alt="product illustration"
              ></img>
            </div>
            <div className="col-12 col-md-8">
              <div className="col-12 align-list">
                <span className="insideSection">Descripción</span>
                <ol>
                  {item.description.map((item, j) => {
                    return <li key={j}>{item}</li>;
                  })}
                </ol>
              </div>

              <div className="col-12 align-list">
                <span className="insideSection">Ventajas</span>
                <ol>
                  {item.features.map((item, j) => {
                    return <li key={j}>{item}</li>;
                  })}
                </ol>
              </div>
              <div className="row d-flex">
                <div className="col-6 col-md-6">Creado:</div>
                <div className="col-6 col-md-6">
                  {moment(item.creationDate).format("dddd, MMMM DD YYYY")}
                </div>
                <div className="col-6 col-md-6">Uso domestico</div>
                <div className="col-6 col-md-6">
                  {item.domesticUse ? "Si" : "No"}
                </div>
                <div className="col-6 col-md-6">Uso industrial</div>
                <div className="col-6 col-md-6">
                  {item.industryUse ? "Si" : "No"}
                </div>
                <div className="col-6 col-md-6">Fragancia</div>
                <div className="col-6 col-md-6">
                  {item.hasFragance ? "Si" : "No"}
                </div>
                <div className="col-6 col-md-6">Aromas</div>
                <div className="col-6 col-md-6">
                  {item.hasFragance &&
                    item.flavors.map((item, k) => {
                      return <span key={k}>{item} </span>;
                    })}
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-12 col-md-6">Tamaños</div>
                <div className="col-12 col-md-6 row d-flex">
                  {item.sizes.map((item, k) => {
                    return (
                      <div key={k} className="col-3">
                        {item}{" "}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDashboard;
