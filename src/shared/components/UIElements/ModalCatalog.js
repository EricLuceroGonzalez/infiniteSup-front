import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHome,
  faIndustry,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

import "./ModalCatalog.css";
import Button from "./Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const ModalCatalog = (props) => {
  const [productItem] = useState(props.products);
  const [current, setCurrent] = useState(0);

  const renderProdacts = () => {
    if (productItem[current]) {
      return (
        <div>
        <Helmet>
        <title>{`Infinite Supplies | ${productItem[current].name}`}</title>
        </Helmet>
          <div className="d-flex col-10">
            <p className="col-10 itemTitle thePurple">
              {productItem[current].name}
            </p>
            <p className="col-2 NotAvailable">{`${
              productItem
                ? "(" + (current + 1) + "/" + productItem.length + ")"
                : ""
            }`}</p>
          </div>
          <div className="row d-flex catalogList">
            <div className="mr-auto ml-auto col-8 col-sm-4 product-image-box">
              <img
                className="productShowImg"
                src={productItem[current].image}
                alt="product illustration"
              ></img>
            </div>
            <div className="mr-auto ml-auto col-12 col-sm-8">
              {productItem[current].description.length > 0 && (
                <div className="insideTitle">Descripción</div>
              )}
              {productItem[current].description.length > 0 && (
                <ul>
                  {productItem[current].description.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              )}
              {!productItem[current].isSupplies && (
                <div>
                  <div className="insideTitle">Ventajas ambientales</div>
                  <ol>
                    {productItem[current].features.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ol>
                  <div className="insideTitle">Tamaños</div>
                  <div className="d-flex">
                    {productItem[current].sizes.map((item, k) => {
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
                        productItem[current].hasFragance
                          ? "available"
                          : "NotAvailable"
                      }`}
                    >
                      <FontAwesomeIcon icon={faTree} />
                      {productItem[current].hasFragance ? (
                        <p className="smallWords">con fragancia</p>
                      ) : (
                        <p className="smallWords">sin fragancia</p>
                      )}
                    </div>
                    <div
                      className={` ${
                        productItem[current].domesticUse
                          ? "available"
                          : "NotAvailable"
                      }`}
                    >
                      <FontAwesomeIcon icon={faHome} />
                      <p className="smallWords">uso domestico</p>
                    </div>
                    <div
                      className={` ${
                        productItem[current].industryUse
                          ? "available"
                          : "NotAvailable"
                      }`}
                    >
                      <FontAwesomeIcon icon={faIndustry} />
                      <p className="smallWords">uso industrial</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-end mb-1">
          <div className='iVibrate mb-2'>
            <Button
              inverse
              href={`https://wa.me/+50762917954?text=%F0%9F%94%B5%20INFINITE-SUPPLIES.COM%0AHola%2C%20me%20interesa%20este%20producto%3A%20%0A%0A${productItem[current].name}%20%0A%0A`}
            >
              <FontAwesomeIcon style={{fontSize:'1.25rem'}} icon={faWhatsapp} />
            </Button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
   
      {renderProdacts()}

      {productItem.length > 1 ? (
        <div className="d-flex justify-content-end">
          <Button
            size="small"
            disabled={current < 1 ? true : false}
            onClick={() => setCurrent(current - 1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Button
            size="small"
            disabled={current < productItem.length - 1 ? false : true}
            onClick={() =>
              setCurrent(() => {
                setCurrent(current + 1);
              })
            }
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalCatalog;
