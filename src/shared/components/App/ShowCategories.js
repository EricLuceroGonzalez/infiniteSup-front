import React, { useState, useEffect } from "react";

import "./Categories.css";
import catA from "../../../media/icon-dishes.png";
import catB from "../../../media/icon-hands.png";
import catC from "../../../media/icon-washmachine.png";
import catD from "../../../media/icon-floor.png";
import catE from "../../../media/icon-industry.png";
import catF from "../../../media/icon-supply.png";
import { useHistory } from "react-router-dom";
import CatModal from "../UIElements/CatModal";

const products = [
  { name: "Cocina", source: catA },
  { name: "Higiene Personal", source: catB },
  { name: "Detergentes", source: catC },
  { name: "Limpiadores Multiusos", source: catD },
  { name: "Industrial", source: catE },
  { name: "Envases e Insumos", source: catF },
];
const ShowCategories = (props) => {
  const [cats, setCats] = useState(products);
  const [catModal, setCatModal] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(products);
  }, []);

  const renderCats = () => {
    return cats.map((item, k) => {
      // console.log(item.source);
      return (
          <div
            className="img-box img-hover-zoom col-6 col-sm-4 col-md-2"
            // history.push(`/productos/${item.name}`)
            key={k}
            onClick={() => {
              console.log(catModal);
              console.log(`item: ${item.name}`);
              
              // setCatModal(!catModal);
            }}
          >
          <CatModal show={catModal} message={'Hello world'}/>
            <img
              className="card-img-top img-restr"
              src={item.source}
              alt="Card cap"
            />
            <h4 className="card-title img-text">{item.name}</h4>
          </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="row d-flex col-10 mr-auto ml-auto justify-content-around m-5">
        {renderCats()}
      </div>
    </React.Fragment>
  );
};

export default ShowCategories;
