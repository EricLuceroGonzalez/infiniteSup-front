import React from "react";
import ShowWindowDimensions from "../../hooks/ShowWindowDimensions-hook";

const Footer = () => {
  return (
    <div
      className="col-12 p-2"
      style={{
        //   marginTop: "150px",
        height: "6%",
        width: '100%',
        color: "white",
        background: "rgba(75,20,90,0.97)",
        position: "fixed",
        bottom: "0px",
        fontSize: "0.75em",
        padding: "5px 2px",
        fontFamily: "monospace",
      }}
    >
      <ShowWindowDimensions/>
    </div>
  );
};

export default Footer;

//
// #8f3985
// #b6a39e
// #efd9ce
// #470ff4
