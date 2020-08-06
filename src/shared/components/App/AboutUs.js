import React, { useEffect } from "react";

import "./TextStyle.css";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  useEffect(() => {
    if (!window.google) {
      console.log("------------------  no window.google==========");
    }
  }, []);
  // const map = () => {
  //   new window.google.maps.Map(document.getElementById("map"), {
  //     center: { lat: 41.0082, lng: 28.9784 },
  //     zoom: 8,
  //   });
  // };
  return (
    <React.Fragment>
    <Helmet>
    <title>Infinite Supplies | Nosotros</title>
    <meta
      name="description"
      content="Productos de limpieza para la industria y el hogar. Estamos para solucionar sus necesidades de limpieza, desde uso personal hasta indutrial"
    />
    </Helmet>
      <div className="fonts col-12 mr-auto ml-auto pt-2">
        <h5>MISIÓN</h5>
        <p className="para col-12 col-sm-6">
          Ofrecemos productos de limpieza, elaborados con altos estándares de
          calidad, biodegradables y seguros para usar en hogares, comercios,
          empresas y la industria en general, brindando a nuestros clientes
          asesoría, buen precio y confianza.
        </p>
        <h5>VISIÓN</h5>
        <p className="para col-12 col-sm-6">
          Ser el aliado de confianza en la distribución de productos e insumos
          de limpieza, elaborados con la más alta calidad, siendo responsables
          con el ambiente y ofreciendo los precios más competitivos del mercado
          panameño.
        </p>
        <h5>VALORES</h5>
        <div className="row d-flex col-12 col-lg-8 valoresAll">
          <div className=" valoresBox col-5 col-sm-5 col-lg-2">CALIDAD</div>
          <div className=" valoresBox col-5 col-sm-5 col-lg-2">
            RESPONSABLE CON EL AMBIENTE
          </div>
          <div className=" valoresBox col-5 col-sm-5 col-lg-2">CONFIANZA</div>
          <div className=" valoresBox col-5 col-sm-5 col-lg-2">AGILIDAD</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
