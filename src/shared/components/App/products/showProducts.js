import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../../hooks/http-hook";
import LoadingSpinner from "../../UIElements/LoadingSpinner";

import ProductShow from "./ProductShow";
import "./showProducts.css";
import "../TextStyle.css";
import { Helmet } from "react-helmet";

const ShowProducts = () => {
  const [categories, setCategories] = useState([]);
  const [isMounted] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
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
  return (
    <React.Fragment>
      <Helmet>
        <title>Infinite Supplies | Nuestros Productos</title>
        <meta
          name="description"
          content="Los mejores productos de limpieza para la industria y el hogar, desinfectantes, detergentes e insumos. Escobas, trapeadores y mas."
        />
      </Helmet>
      {isLoading && <LoadingSpinner asOverlay />}
      <h5 className="mt-5">Nuestros productos</h5>
      <div className="row d-flex col-12 col-md-8 mr-auto ml-auto">
        {renderProducts()}
      </div>
    </React.Fragment>
  );
};

export default ShowProducts;
