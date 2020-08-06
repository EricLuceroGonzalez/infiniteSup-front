import React, { useState, useEffect } from "react";

import "../Categories.css";

import CategoryItem from "../CategoryItem";
import { useHttpClient } from "../../../hooks/http-hook";
import LoadingSpinner from "../../UIElements/LoadingSpinner";
import ErrorModal from "../../UIElements/ErrorModal";

const ShowCategories = (props) => {
  const [categories, setCategories] = useState([]);
  const [isMounted] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    document.title = "Infinite Supplies | Nuestros Productos";
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
    if (isMounted) {
      //  console.log(`isMounted: ${isMounted}`);

      fetchCategories();
      //   fetchProducts()
    }
  }, [sendRequest, isMounted]);

  const renderCats = () => {
    return categories.map((item, k) => {    
      return (
        <CategoryItem
          key={k}
          category={item.categoryName}
          logo={item.logo}
          products={item.products}
        />
      );
    });
  };

  return (
    <React.Fragment>
    {isLoading && <LoadingSpinner asOverlay />}
      <div className="row d-flex col-12 mr-auto ml-auto justify-content-around mt-2">
        {renderCats()}
      </div>
    </React.Fragment>
  );
};

export default ShowCategories;