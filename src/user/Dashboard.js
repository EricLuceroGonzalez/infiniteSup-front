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
import ProductDashboard from "./ProductDashboard";
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

  // const renderProducts = () => {
  //   if (categories.length > 0) {
  //     const allCats = categories.map((item, j) => {
  //       return <ProductDashboard key={j} category={item} />;
  //     });
  //     return allCats;
  //   }
  // };

  return (
    <React.Fragment>
      <div style={{ marginTop: "2em" }}>
        <ErrorModal error={error} onClear={errorHandler} />
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Dashboard</h2>
        <div className="col-6 mr-auto ml-auto bordeB">
          <h4>Blog</h4>
          <div className="col-12 row d-flex align bordeB">
            <div className="col-12 col-sm-6 mr-auto">
              {" "}
              <DateAndTime />
            </div>
            <div className="col-12 col-sm-6 ml-auto">
            <Button>Nueva entrada</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Dashboard;
