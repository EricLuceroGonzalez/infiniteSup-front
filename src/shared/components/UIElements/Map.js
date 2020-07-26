import React, { useRef, useEffect } from "react";

import "./Map.css";
// Google Maps api key: AIzaSyASHAS0gMDvZj56Vpc2VzndGdolfdUuWKM

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    if (window.google) {
      // Constructor function --> argments: (where to display, what to display)
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom,
      });

      //   Render a marker --> create a new marker on the center :
      new window.google.maps.Marker({ position: center, map: map });
    } else{
      
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
