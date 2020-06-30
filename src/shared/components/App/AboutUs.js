import React, { useEffect } from "react";

import Map from "./Map";
// import "./Map.css";

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
      <h2 className='fontA'>About</h2>
      <div className="col-10 col-md-6 mr-auto ml-auto map-container">
        <Map center={{ lat: 9.060555, lng: -79.422768 }} zoom={16} />
      </div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
      <div>asdas</div>
    </React.Fragment>
  );
};

export default AboutUs;
