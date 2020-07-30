import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import { useHistory } from "react-router-dom";

import blogImage1 from "../../../media/donaciones.jpeg";
import blogImage2 from "../../../media/bitmap2.png";
import blogImage3 from "../../../media/navlogo.png";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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

const ShowBlog = (props) => {
  // const [dateBlog, setDateBlog] = useState();

  const [entry, setEntry] = useState(blogEntry);
  const history = useHistory();

  useEffect(() => {
    moment.locale("es");
    // console.log(blogEntry);
  }, []);

  const showBlogCars = () => {
    return entry.map((item, k) => {
      // console.log(item.title);

      return (
        <React.Fragment>
          <div
            key={k}
            className="row d-flex col-3 mr-auto ml-auto entryBox"
            onClick={() => {
              history.push(`/blog/${item.id}`);
            }}
          >
              <div className="col-12 d-flex align-items-end">
                <img
                  className="entryImg"
                  src={item.image}
                  alt="blog entry"
                ></img>
              </div>
              <p className="mt-4 entryTitle col-12">{item.title}</p>
              <div className="col-10 col-sm-12">
                <p className="entryDate"> {moment(item.date).format("LL")}</p>
                <p className="para"> {item.resumen}</p>
                <div className="entryDate">
                  Leer mas{" "}
                  <FontAwesomeIcon
                    className="ml-auto entryArrow"
                    icon={faChevronRight}
                  />
                </div>
              </div>
            </div>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="row d-flex col-12 mr-auto ml-auto justify-content-around mt-2">
        {showBlogCars()}
      </div>
    </React.Fragment>
  );
};

export default ShowBlog;
