import React, { useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import moment from "moment";
import "moment/locale/es";

import DateAndTime from "../shared/components/UIElements/DateAndTime";
import "./Dashboard.css";
import Button from "../shared/components/UIElements/Button";
import ErrorModal from "../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import EditProduct from "./EditProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isMounted] = useState(true);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const errorHandler = () => {
    setShowModal(false);
  };

  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      // if (isMounted) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getCategories`
        );
        setCategories(responseData.categories);
        console.log(responseData.categories);
        // setIsMounted(false)
      } catch (err) {}
      // }
    };

    if (isMounted) {
      //  console.log(`isMounted: ${isMounted}`);

      fetchCategories();
    }
  }, [sendRequest, isMounted]);

  const renderProducts = () => {
    if (categories.length > 0) {
      const allCats = categories.map((item, j) => {
        return (
          <div key={j} className="col-12 mr-auto ml-auto">
            <h4>{item.categoryName}</h4>
            {item.products.map((item, k) => {
              return (
                <div key={k} className="col-12 col-lg-8 product-box row d-flex">
                  {/**
                    <EditProduct
                    show={showModal}
                    closeModal={() => openCloseModal()}
                    onClear={errorHandler}
                    prodName={item.name}
                  />
                   */}
                  <div
                    className="edit-button col-2"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Editar
                  </div>
                  <h5 className="col-12">{item.name}</h5>
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
      });
      return allCats;
    }
  };

  return (
    <React.Fragment>
      <div style={{ marginTop: "2em" }}>
        <ErrorModal error={error} onClear={errorHandler} />
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Dashboard</h2>
        <h2>Productos</h2>
        <div className="col-12 row d-flex align">
          <div className="col-12 col-sm-6">
            {" "}
            <DateAndTime />
          </div>
          <Button className="col-12 col-sm-6">Nuevo Producto</Button>
        </div>
        {renderProducts()}
      </div>
      <div>
        <h2>Blog</h2>
        <div>'renderProducts()'</div>
      </div>
    </React.Fragment>
  );
};
export default Dashboard;
