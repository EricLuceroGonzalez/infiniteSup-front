import React, { useState, useEffect } from "react";

import "./Categories.css";
import catA from "../../../media/icon-dishes.png";
import catB from "../../../media/icon-hands.png";
import catC from "../../../media/icon-washmachine.png";
import catD from "../../../media/icon-floor.png";
import catE from "../../../media/icon-industry.png";
import catF from "../../../media/icon-supply.png";
import fgCatA from "../../../media/fg-icon-dishes.png";
import fgCatB from "../../../media/fg-icon-hands.png";
import fgCatC from "../../../media/fg-icon-washmachine.png";
import fgCatD from "../../../media/fg-icon-floor.png";
import fgCatE from "../../../media/fg-icon-industry.png";
import fgCatF from "../../../media/fg-icon-supply.png";

import { useHistory } from "react-router-dom";
import CatModal from "../UIElements/CatModal";
import CategoryItem from "./CategoryItem";
import { useHttpClient } from "../../hooks/http-hook";

const products = [
  {
    category: "Cocina",
    source: catA,
    logo: fgCatA,
    items: [
      {
        name: "Jabón Líquido para fregar",
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
      },
    ],
  },
  {
    category: "Jabones Líquidos",
    source: catB,
    logo: fgCatB,
    items: [
      {
        name: "Jabón Líquido para manos",
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
      },
      {
        name: "Suavizante de tela",
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
      },
    ],
  },
  {
    category: "Detergentes",
    source: catC,
    logo: fgCatC,
    items: [
      {
        name: "fuerteX",
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
      },
      {
        name: "Detergente en polvo (Lavanda, Floral, Limón",
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
        flavors: ["Lavanda", "Floral", "Limón"],
      },
    ],
  },
  {
    category: "Limpiadores Multiusos",
    source: catD,
    logo: fgCatD,
    items: [
      {
        name: "Limpiadores Multiusos",
        description: [
          "Los limpiadores multiusos, se pueden utilizar en pisos, cocinas, baños, inodoros, basureros etc.",
          "Son Soluble en agua, no necesitan de otros disolventes o componentes y se disuelven fácilmente en cantidades controladas.",
          "Son productos concentrados, lo que lo hace más rendidor.",
        ],
        pros: ["Ideal para uso doméstico y cualquier tipo de industria."],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: true,
        flavors: ["FLORES TROPICALES", "LAVANDA", "BAMBÚ", "MANZANA - KIWI"],
      },
      {
        name: "Desengrasante Multiusos",
        description: [
          "Este producto puede ser utilizado en cocinas, refrigeradoras, estufas y hornos, quemadores y extractores, paredes, marcos de ventanas, puertas, pisos y gabinetes.",
          "Cuenta con la presentación domestica.",
          "Es fácil de manipular, aplicar y controlar.",
        ],
        pros: ["Ideal para uso doméstico y cualquier tipo de industria."],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: false,
      },
    ],
  },
  {
    category: "Industrial",
    source: catE,
    logo: fgCatE,
    items: [
      {
        name: "Desengrasante Multiusos Industrial",
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
      },
      {
        name: "Limpiavidrios",
        description: [
          "Este producto está hecho con solventes orgánicos, puede ser utilizado en cualquier superficie de vidrio y ventanas.",
          "Se actúa con rapidez sobre las superficies y no opaca.",
          "Para utilizarlo solo debe rociar la superficie a limpiar y frotar suavemente con un paño limpio y seco.",
        ],
        pros: ["Cuenta con la presentación domestica e industrial."],
        sizes: ["1 LT", "1 GL", "5 GL", "55 GL"],
        fragance: false,
      },
    ],
  },
  {
    category: "Envases e Insumos",
    source: catF,
    logo: fgCatF,
    items: [
      { name: "GALONES BLANCOS", description: "", sizes: "" },
      { name: "GALONES NATURALES", description: "" },
      { name: "TAPAS BLANCAS", description: "" },
      { name: "TAPAS AZULES", description: "" },
      { name: "CEPILLO DE LAVAR", description: "" },
      { name: "TRAPEADOR", description: "" },
      { name: "PASTILLAS PARA BAÑO", description: "" },
      { name: "ESCOBAS", description: "" },
      { name: "FOCOS AHORRADORES", description: "" },
      { name: "RECOGEDORES", description: "" },
      { name: "ESPONJAS", description: "" },
      { name: "BRILLOS", description: "" },
      { name: "SUPER GLUE", description: "" },
      { name: "TOALLITAS PEPERMINT", description: "" },
    ],
  },
];
const ShowCategories = (props) => {
  const [categories, setCategories] = useState(products);
  const [caty, setCaty] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getCategories`
        );
        setCaty(responseData.categories);
        console.log(responseData.categories);
      } catch (err) {}
    };
    fetchCategories();
  }, [sendRequest]);

  const renderCats = () => {
    return categories.map((item, k) => {
      // console.log(item.source);
      return (
        <CategoryItem
          key={k}
          category={item.category}
          logo={item.source}
          imgSource={item.logo}
          pros={item.items[0].pros}
          name={item.items[0].name}
          description={item.items[0].description}
          sizes={item.items[0].sizes}
          frag={item.items[0].fragance}
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
