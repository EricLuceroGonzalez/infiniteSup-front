import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../UIElements/LoadingSpinner";

import "./showProducts.css";

const ShowProducts = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isMounted, setIsMounted] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    const fetchCategories = async () => {
      // if (isMounted) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getCategories`
        );
        setCategories(responseData.categories);
        //  console.log(responseData.categories);
        // setIsMounted(false)
      } catch (err) {}
      // }
    };

    const fetchProducts = async () => {
      // if (isMounted) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getProducts`
        );
        setProductList(responseData.products);
        //  console.log(responseData.products);
        // setIsMounted(false)
      } catch (err) {}
      // }
    };

    if (isMounted) {
      //  console.log(`isMounted: ${isMounted}`);

      fetchCategories();
      //   fetchProducts()
    }
  }, [sendRequest, isMounted]);

  const renderProducts = () => {
    //  console.log(`categories.length: ${categories.length}`);

    if (categories.length > 0) {
      return categories.map((item, k) => {
        //  console.log(`\n\nk = ${k}`);
        //  console.log(item);

        return (
          <div key={k} className="col-12 col-sm-6 col-lg-6 row d-flex">
            <div
              className="col-10 itemTitle justify-content-start align-items-center categoryBox d-flex"
              onClick={() => {
                //  console.log(item.categoryName);
              }}
            >
              <div className="col-4 col-sm-6 col-md-6 col-lg-3">
                <img
                  className="productShowImg"
                  src={item.fgLogo}
                  alt={`category ${item.categoryName} logo`}
                ></img>
              </div>
              <div className="align-middle categoryName">
                {item.categoryName}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <h5 className="mt-2">Nuestros productos</h5>
      <div className="row d-flex col-12 col-md-8 mr-auto ml-auto">
        {categories.length > 0 ? renderProducts() : "NaN "}
      </div>
    </React.Fragment>
  );
};

export default ShowProducts;
