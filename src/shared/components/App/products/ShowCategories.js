import React, { useState, useEffect } from "react";

import "../Categories.css";
// import catA from "../../../media/icon-dishes.png";
// import catB from "../../../media/icon-hands.png";
// import catC from "../../../media/icon-washmachine.png";
// import catD from "../../../media/icon-floor.png";
// import catE from "../../../media/icon-industry.png";
// import catF from "../../../media/icon-supply.png";
// import fgCatA from "../../../media/fg-icon-dishes.png";
// import fgCatB from "../../../media/fg-icon-hands.png";
// import fgCatC from "../../../media/fg-icon-washmachine.png";
// import fgCatD from "../../../media/fg-icon-floor.png";
// import fgCatE from "../../../media/fg-icon-industry.png";
// import fgCatF from "../../../media/fg-icon-supply.png";

import { useHistory } from "react-router-dom";
import CategoryItem from "../CategoryItem";
import { useHttpClient } from "../../../hooks/http-hook";

const ShowCategories = (props) => {
  const [categories, setCategories] = useState([]);
  const [caty, setCaty] = useState([]);
  const [isMounted, setIsMounted] = useState(true);
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

  useEffect(() => {
    const fetchCategories = async () => {
      // if (isMounted) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getCategories`
        );
        setCaty(responseData.categories);
        // setIsMounted(false)
      } catch (err) {}
      // }
    };

    if (isMounted) {
      fetchCategories();
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
          // imgSource={item.logo}
          // pros={item.items[0].pros}
          // name={item.items[0].name}
          // description={item.items[0].description}
          // sizes={item.items[0].sizes}
          // frag={item.items[0].fragance}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <div className="row d-flex col-12 mr-auto ml-auto justify-content-around mt-2">
        {renderCats()}
      </div>
    </React.Fragment>
  );
};

export default ShowCategories;
