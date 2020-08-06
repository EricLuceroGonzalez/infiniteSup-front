import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../../hooks/http-hook";
import LoadingSpinner from "../../UIElements/LoadingSpinner";

import "./showProducts.css";
import ProductShow from "./ProductShow";
import ErrorModal from "../../UIElements/ErrorModal";

const ShowProducts = () => {
  const [categories, setCategories] = useState([]);
  const [isMounted] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    document.title = "Infinite Supplies | Nuestros Productos";
    const fetchCategories = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getCategories`
        );
        setCategories(responseData.categories);
      } catch (err) {}
    };

    if (isMounted) {
      fetchCategories();
    }
  }, [sendRequest, isMounted]);

  const renderProducts = () => {
    return categories.map((item, k) => {
      return (
        <ProductShow
          key={k}
          category={item.categoryName}
          logo={item.logo}
          products={item.products}
          fgLogo={item.fgLogo}
        />
      );
    });
  };
  const errorHandler = () => {
    clearError();
  };
  return (
    <React.Fragment>

    <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && <LoadingSpinner asOverlay />}
      <h5 className="mt-2">Nuestros productos</h5>
      <div className="row d-flex col-12 col-md-8 mr-auto ml-auto">
        {renderProducts()}
      </div>
    </React.Fragment>
  );
};

export default ShowProducts;
