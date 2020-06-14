import React, { useState, useEffect } from "react";

import "./Categories.css";
import catA from "../../../media/prod-0.png";
import catB from "../../../media/prod-1.png";
import catC from "../../../media/prod-2.png";
import catD from "../../../media/prod-3.png";
import catE from "../../../media/prod-4.png";
import catF from "../../../media/prod-5.png";
import { useHistory } from "react-router-dom";

const products = [
  { name: "Cocina", source: catA },
  { name: "Higiene Personal", source: catB },
  { name: "Lavanderia", source: catC },
  { name: "Pisos", source: catD },
  { name: "Industrial", source: catE },
  { name: "Insumos", source: catF },
];
const ShowCategories = (props) => {
  const [cats, setCats] = useState(products);
  const history = useHistory();

  useEffect(() => {
    console.log(products);
  }, []);

  const renderCats = () => {
    return cats.map((item, k) => {
      // console.log(item.source);
      return (
        <div
          className="card img-box img-hover-zoom"
          key={k}
          // style={{ border: "1px solid red" }}
          onClick={() => {
            history.push(`/products/${item.name}`);
          }}
        >
          <img
            className="card-img-top img-restr"
            src={item.source}
            alt="Card  cap"
          />
          <h5 className="card-title img-text">{item.name}</h5>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="mr-auto ml-auto card-group col-12">{renderCats()}</div>
    </React.Fragment>
  );
};

export default ShowCategories;
