import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHome,
  faIndustry,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

import jabonFregar from "../../../media/product/jabon-liquido-fregar.png";
import jabonManos from "../../../media/product/jabon-liquido-manos.png";
import jabonSuavizante from "../../../media/product/jabon-liquido-suavizante.png";
import fuerteX from "../../../media/product/detergente-sin-fragancia.png";
import detergenteFragancia from "../../../media/product/detergente-con-fragancia.png";
import limpiadorMultiusos from "../../../media/product/limpiadores-multiusos.png";
import desengrasanteMultiusos from "../../../media/product/desengrasante-multiusos.png";
import desengrasanteIndustrial from "../../../media/product/desengrasante-industrial.png";
import limpiaVidrios from "../../../media/product/limpia-vidrios.png";
import insumosA from "../../../media/product/insumos.png";
import insumosB from "../../../media/product/insumos(1).png";
import insumosC from "../../../media/product/insumos(2).png";

import "./ModalCatalog.css";
import Button from "./Button";

const products = [
  {
    category: "Cocina",

    items: [
      {
        name: "Jabón Líquido para fregar",
        image: jabonFregar,
        description: [
          "Jabón liquido para lavar vajillas, con fragancia limón y toque de crema que no reseca y mantiene las manos humectadas.",
          "Es eficaz y efectivo para arrancar la grasa.",
        ],
        pros: [
          "Es concentrado, fácil de manipular, aplicar, controlar.",
          "Ideal para uso doméstico y cualquier tipo de industria.",
        ],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: true,
        flavors: ["Limón"],
        domestic: true,
        industry: false,
      },
    ],
  },
  {
    category: "Jabones Líquidos",

    items: [
      {
        name: "Jabón Líquido para manos",
        image: jabonManos,
        description: [
          "Jabón liquido para manos, con fragancia a almendra y toque de crema que no reseca y mantiene las manos humectadas.",
          "Es eficaz y efectivo en la limpieza.",
        ],
        pros: [
          "Fácilmente soluble en agua gracias a su concentración, es fácil de manipular, aplicar, controlar.",
          "Ideal para uso doméstico y cualquier tipo de industria, de fácil instalación en dispensadores.",
        ],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: true,
        flavors: ["Almendra"],
        domestic: true,
        industry: true,
      },
    ],
  },
  {
    category: "Detergentes",

    items: [
      {
        name: "fuerteX",
        image: fuerteX,
        description: [
          "Detergente sin fragancia de fácil disolución.",
          "Voluminoso (rendidor) eficaz contra las manchas y todo tipo de suciedad.",
          "Se puede usar en cualquier temperatura y medio ambiente.",
          "Ideal para la industria alimenticia, hotelera, restaurantes y lavanderías.",
          "Fácil de manipular, aplicar y controlar.",
          "Empaque laminado de alta resistencia.",
        ],
        pros: [
          "Utilización de menos producto, por ende menos vertido a las aguas residuales, fácil disolución.",
        ],
        sizes: ["22LBS", "30LBS", "55LBS"],
        fragance: false,
        domestic: true,
        industry: true,
      },
      {
        name: "Detergente en polvo (Lavanda, Floral, Limón)",
        image: detergenteFragancia,
        description: [
          "Detergente con fragancia a: LAVANDA, FLORAL Y LIMÓN.",
          "Este producto es rendidor, de fácil disolución.",
          "Eficaz contra las manchas y todo tipo de suciedad (no necesita otro producto adicional).",
          "Única molécula suave desarrollada para proteger la ropa, disminuir las arrugas y dejar la ropa más suave.",
          "De uso Múltiple, Ideal para el lavado de la ropa en cualquier temperatura y medio ambiente.",
          "No afecta el color.",
          "Ideal para usos doméstico y cualquier tipo de industria.",
        ],
        pros: [
          "Utilización de menos producto, por ende menos vertido a las aguas residuales, fácil disolución.",
        ],
        sizes: ["200gr", "500gr", "1,000gr", "10kg"],
        fragance: true,
        domestic: true,
        industry: false,
        flavors: ["Lavanda", "Floral", "Limón"],
      },
      {
        name: "Suavizante de tela",
        image: jabonSuavizante,
        description: [
          "Suavizante de tela, con fragancia a bebé.",
          "Cuenta con una formula humectante desarrollada para proteger la ropa, disminuir las arrugas para un fácil planchado y dejar la ropa más suave.",
        ],
        pros: [
          "Es concentrado, fácil de manipular, aplicar, controlar.",
          "Ideal para uso doméstico y cualquier tipo de industria.",
        ],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: true,
        flavors: ["Almendra"],
        domestic: true,
        industry: false,
      },
    ],
  },
  {
    category: "Limpiadores Multiusos",

    items: [
      {
        name: "Limpiadores Multiusos",
        image: limpiadorMultiusos,
        description: [
          "Los limpiadores multiusos, se pueden utilizar en pisos, cocinas, baños, inodoros, basureros etc.",
          "Son Soluble en agua, no necesitan de otros disolventes o componentes y se disuelven fácilmente en cantidades controladas.",
          "Son productos concentrados, lo que lo hace más rendidor.",
        ],
        pros: ["Ideal para uso doméstico y cualquier tipo de industria."],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: true,
        flavors: ["FLORES TROPICALES", "LAVANDA", "BAMBÚ", "MANZANA - KIWI"],
        domestic: true,
        industry: true,
      },
      {
        name: "Desengrasante Multiusos",
        image: desengrasanteMultiusos,
        description: [
          "Este producto puede ser utilizado en cocinas, refrigeradoras, estufas y hornos, quemadores y extractores, paredes, marcos de ventanas, puertas, pisos y gabinetes.",
          "Cuenta con la presentación domestica.",
          "Es fácil de manipular, aplicar y controlar.",
        ],
        pros: ["Ideal para uso doméstico y cualquier tipo de industria."],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: false,
        domestic: true,
        industry: true,
      },
      {
        name: "Limpiavidrios",
        image: limpiaVidrios,
        description: [
          "Este producto está hecho con solventes orgánicos, puede ser utilizado en cualquier superficie de vidrio y ventanas.",
          "Se actúa con rapidez sobre las superficies y no opaca.",
          "Para utilizarlo solo debe rociar la superficie a limpiar y frotar suavemente con un paño limpio y seco.",
        ],
        pros: ["Cuenta con la presentación domestica e industrial."],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: false,
        domestic: true,
        industry: true,
      },
    ],
  },
  {
    category: "Industrial",

    items: [
      {
        name: "Desengrasante Multiusos Industrial",
        image: desengrasanteIndustrial,
        description: [
          "Este producto puede ser utilizado en cocinas, refrigeradoras, estufas y hornos, quemadores y extractores, paredes, marcos de ventanas, puertas, pisos y gabinetes.",
        ],
        pros: [
          "Cuenta con la presentación industrial.",
          "Ideal para cocinas industriales, restaurantes, hoteles etc.",
          "Es fácil de manipular, aplicar y controlar",
        ],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: false,
        domestic: false,
        industry: true,
      },
    ],
  },
  {
    category: "Envases e Insumos",

    items: [
      {
        name: "GALONES BLANCOS",
        image: insumosA,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "GALONES NATURALES",
        image: insumosB,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "TAPAS BLANCAS",
        image: insumosC,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "TAPAS AZULES",
        image: insumosA,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "CEPILLO DE LAVAR",
        image: insumosB,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "TRAPEADOR",
        image: insumosC,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "PASTILLAS PARA BAÑO",
        image: insumosA,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "ESCOBAS",
        image: insumosB,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "FOCOS AHORRADORES",
        image: insumosA,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "RECOGEDORES",
        image: insumosC,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "ESPONJAS",
        image: insumosA,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "BRILLOS",
        image: insumosB,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "SUPER GLUE",
        image: insumosC,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
      {
        name: "TOALLITAS PEPERMINT",
        image: insumosA,
        description: [],
        pros: [],
        sizes: [],
        fragance: "",
        domestic: "",
        industry: "",
      },
    ],
  },
];

const ModalCatalog = (props) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    products.map((item, k) => {
      if (item.category === props.category) {
        setCategoryItems(item.items);

        return item.items;
      }
      return null;
    });
  }, [props]);

  const renderProdacts = () => {
    if (categoryItems[current]) {
      return (
        <div>
          <div className="d-flex col-10">
            <p className="col-10 itemTitle thePurple">
              {categoryItems[current].name}
            </p>
            <p className="col-2 NotAvailable">{`${
              categoryItems
                ? "(" + (current + 1) + "/" + categoryItems.length + ")"
                : ""
            }`}</p>
          </div>
          <div className="row d-flex catalogList">
            <div className="mr-auto ml-auto col-10 col-sm-4 ">
              <img
                className="productShowImg"
                src={categoryItems[current].image}
                alt="product illustration"
              ></img>
            </div>
            <div className="mr-auto ml-auto col-12 col-sm-8">
              <ul>
                {categoryItems[current].description.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
              <div className="insideTitle">Ventajas ambientales</div>
              <ol>
                {categoryItems[current].pros.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ol>
              <div className="insideTitle">Tamaños</div>
              <div className="d-flex">
                {categoryItems[current].sizes.map((item, k) => {
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
                    categoryItems[current].fragance
                      ? "available"
                      : "NotAvailable"
                  }`}
                >
                  <FontAwesomeIcon icon={faTree} />
                  {categoryItems[current].fragance ? (
                    <p className="smallWords">con fragancia</p>
                  ) : (
                    <p className="smallWords">sin fragancia</p>
                  )}
                </div>
                <div
                  className={` ${
                    categoryItems[current].domestic
                      ? "available"
                      : "NotAvailable"
                  }`}
                >
                  <FontAwesomeIcon icon={faHome} />
                  <p className="smallWords">uso domestico</p>
                </div>
                <div
                  className={` ${
                    categoryItems[current].industry
                      ? "available"
                      : "NotAvailable"
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
    }
  };
  return (
    <div>
      {renderProdacts()}

      {categoryItems.length > 1 ? (
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
            disabled={current < categoryItems.length - 1 ? false : true}
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
