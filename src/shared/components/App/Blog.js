import React, { useLayoutEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import blogImage1 from "../../../media/donaciones.jpeg";
import blogImage2 from "../../../media/bitmap2.png";
import blogImage3 from "../../../media/navlogo.png";
import { useHistory, Link } from "react-router-dom";
import "./TextStyle.css";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BlogEntry = [
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

// <Link
// style={{ textDecoration: "none" }}
// to={`/blog/${item.id}`}
// target="_blank"
// key={k}
// >

// </Link>

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Blog = () => {
  const [width, height] = useWindowSize();
  const history = useHistory();

  const getEntry = () => {
    return BlogEntry.map((item, k) => {
      return (
        <Link
          key={k}
          style={{ textDecoration: "none" }}
          to={`/blog/${item.id}`}
        >
          <div className="row d-flex col-10 col-md-6 mr-auto ml-auto bordeC entryBox">
            <p className="entryTitle col-12">{item.title}</p>
            <div className="col-10 col-sm-4">
              <p className="entryDate"> {moment(item.date).format("LL")}</p>
              <p className="para"> {item.resumen}</p>
            </div>
            {width > "500" ? (
              <div className="col-10 col-sm-8 d-flex align-items-end">
                <img
                  className="entryImg"
                  src={item.image}
                  alt="blog entry"
                ></img>
                <FontAwesomeIcon
                  className="ml-auto entryArrow"
                  icon={faChevronRight}
                />
              </div>
            ) : (
              <div className="col-2 entryArrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            )}
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="mt-3">
      <h1 className="itemTitle">Blog</h1>
      <div>{getEntry()}</div>
    </div>
  );
};

export default Blog;
