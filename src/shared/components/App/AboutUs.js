import React, { useEffect } from "react";

import logo from "../../../media/logo_full.png";

import "./TextStyle.css";

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
      <div className="fonts col-12 mr-auto ml-auto">
        <h2 className="hed">Nosotros</h2>

        <h5>MISIÓN</h5>
        <p className="para col-8 col-sm-8">
          Ofrecemos productos de limpieza, elaborados con altos estándares de
          calidad, biodegradables y seguros para usar en hogares, comercios,
          empresas y la industria en general, brindando a nuestros clientes
          asesoría, buen precio y confianza.
        </p>
        <h5>VISIÓN</h5>
        <p className="para col-8 col-sm-8">
          Ser el aliado de confianza en la distribución de productos e insumos
          de limpieza, elaborados con la más alta calidad, siendo responsables
          con el ambiente y ofreciendo los precios más competitivos del mercado
          panameño.
        </p>
        <h5>VALORES</h5>
          <div className="row d-flex col-12 col-xl-8 valoresAll">
            <div className="hed valoresBox col-5 col-sm-5 col-lg-2">CALIDAD</div>
            <div className="hed valoresBox col-5 col-sm-5 col-lg-2">
              RESPONSABLE CON EL AMBIENTE
            </div>
            <div className="hed valoresBox col-5 col-sm-5 col-lg-2">CONFIANZA</div>
            <div className="hed valoresBox col-5 col-sm-5 col-lg-2">AGILIDAD</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;

// <ul className="para col-12 col-sm-6">
// <li>CALIDAD</li>
// <li>RESPONSABLE CON EL AMBIENTE</li>
// <li>CONFIANZA</li>
// <li>AGILIDAD</li>
// </ul>
