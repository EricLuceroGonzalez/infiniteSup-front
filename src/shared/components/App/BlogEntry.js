import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import blogImage1 from "../../../media/donaciones.jpeg";
import blogImage2 from "../../../media/bitmap2.png";
import blogImage3 from "../../../media/navlogo.png";
import { useHistory } from "react-router-dom";
import "./TextStyle.css";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UIElements/Button";

import logo_small from "../../../media/logo_sm_cut.png";
const blogEntry = [
  {
    id: "blog1",
    title: "Entrega de Donaciones",
    resumen: "Acciones de responsabilidad social",
    text:
      "Como parte de nuestras acciones de responsabilidad social, el pasado mes, el equipo de Infinite Supplies, entregó productos de limpieza Fuertex a diferentes fundaciones entre ellas, el Comedor Casa de Pan, quienes brindan comida a niños de escasos recursos en el área de Felipillo. Recibió la donación la señora Belén, quien lleva muchos años realizando esta noble gestión.",
    image: blogImage1,
    hasHighlight: true,
    highlight: "",
    date: "20200202",
  },
  {
    id: "blog2",
    title: "Productos de Calidad Fuertex",
    resumen: "Gama de productos de limpieza Fuertex",
    text:
      "Fuertex, ofrece una amplia gama de productos para la limpieza del hogar y empresas,  todos fabricados con materia prima de alta calidad, amigables con el ambiente, de rápida acción y eficaz con la eliminación del sucio y las impurezas. Fuertex es una marca panameña,  elaborada, envasada y distruida por Infnite Supplies. Todos nuestros productos son elborados con materia prima biodegradable, pensados en la seguridad y protección del consumidor.",
    image: blogImage2,
    hasHighlight: true,
    highlight: "",
    date: "20200718",
  },
  {
    id: "blog3",
    title:
      "Nueva Imagen, con el mismo servicio y  los productos que necesitas.",
    resumen: "Mejor servicio e imagen",
    text:
      "Infinite Supplies estrena nueva imagen corporativa, una imagen mas fresca, dinámica y fuerte. Redefinimos nuestra misión y visión de negocio, lo que nos consolida como una empresa seria y responsable con nuestros clientes y consumidores. Nos respaldan los cuatro valores que nos caterizan, Calidad, Responsables con el Ambiente, Confianza y Agilidad. Reforzamos nuestros inventario e ingresamos a la familia Infinte nuevos productos para cumplir con nuestra promesa de que Infinite Supplies tiene lo que necesitas.",
    image: blogImage3,
    hasHighlight: true,
    highlight: "",
    date: "20200614",
  },
];

const BlogEntry = (props) => {
  const [endPoint, setEndpoint] = useState();
  const history = useHistory();

  useEffect(() => {
    setEndpoint(history.location.pathname.slice(-5));
    console.log(endPoint);
    console.log(props);
  }, [history.location.pathname, endPoint, props]);

  const getEntry = () => {
    return blogEntry.map((item, k) => {
      if (item.id === endPoint) {
        return (
          <div key={k} className="col-12 mr-auto ml-auto">
            <div className="col-12 mr-auto ml-auto">
              <h2>{item.title}</h2>
              <p className="entryDate"> {moment(item.date).format("LL")}</p>
              <div>
                <p className="itemTitle">{item.resumen}</p>
              </div>
            </div>
            <div className="mr-auto ml-auto col-12 col-md-10 col-lg-7">
            <img width="90%" src={item.image} alt="brand logo as footer"></img>
              <p className="para">{item.text}</p>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div className="mt-3">
      <h1 className="itemTitle">Blog</h1>
      <div>{getEntry()}</div>
      <Button floating toBack={"/blog"}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </Button>
      <div className="col-12 mt-5 mb-4">
        <img width="100px" src={logo_small} alt="brand logo as footer"></img>
      </div>
    </div>
  );
};

export default BlogEntry;
