import React, { useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faHome, faIndustry } from "@fortawesome/free-solid-svg-icons";
const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isMounted, setIsMounted] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchProducts = async () => {
      // if (isMounted) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getProducts`
        );
        console.log(responseData.products);
        setProducts(responseData.products);
      } catch (err) {}
      // }
    };

    if (isMounted) {
      //  console.log(`isMounted: ${isMounted}`);

      fetchProducts();
    }
  }, [sendRequest, isMounted]);

  const renderProds = () => {
    return (
      <div>
        <div className="d-flex">
          <p className="col-10 itemTitle thePurple">{item.name}</p>
        </div>
        <div className="row d-flex catalogList">
          <div className="mr-auto ml-auto col-10 col-sm-4 ">
            <img
              className="productShowImg"
              src={item.image}
              alt="product illustration"
            ></img>
          </div>
          <div className="mr-auto ml-auto col-12 col-sm-8">
            <ul>
              {item.description.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
            <div className="insideTitle">Ventajas ambientales</div>
            <ol>
              {item.features.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ol>
            <div className="insideTitle">Tamaños</div>
            <div className="d-flex">
              {item.sizes.map((item, k) => {
                return (
                  <div className="theSizes col-2" key={k}>
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="col-10 col-sm-6 d-flex justify-content-around">
              <div
                className={`  ${
                  item.hasFragance ? "available" : "NotAvailable"
                }`}
              >
                <FontAwesomeIcon icon={faTree} />
                {item.hasFragance ? (
                  <p className="smallWords">con fragancia</p>
                ) : (
                  <p className="smallWords">sin fragancia</p>
                )}
              </div>
              <div
                className={` ${
                  item.domesticUse ? "available" : "NotAvailable"
                }`}
              >
                <FontAwesomeIcon icon={faHome} />
                <p className="smallWords">uso domestico</p>
              </div>
              <div
                className={` ${
                  item.industryUse ? "available" : "NotAvailable"
                }`}
              >
                <FontAwesomeIcon icon={faIndustry} />
                <p className="smallWords">uso industrial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div className="product-card col-10"></div>;
};
export default ProductDashboard;
