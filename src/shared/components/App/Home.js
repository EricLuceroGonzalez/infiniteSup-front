import React, { useEffect, useState, useLayoutEffect } from "react";
import ShowWindowDimensions from "../../hooks/ShowWindowDimensions-hook";

import bg1m from "../../../media/bg/1-mobile.jpg";
import bg2m from "../../../media/bg/2-mobile.jpg";
import bg3m from "../../../media/bg/3-mobile.jpg";
import bg4m from "../../../media/bg/4-mobile.jpg";

import bg1b from "../../../media/bg/1-1920x1080.jpg";
import bg2b from "../../../media/bg/2-1920x1080.jpg";
import bg3b from "../../../media/bg/3-1920x1080.jpg";
// import bg4b from "../../../media/bg/4-1920x1080.jpg";
// <BackgroundSlideshow images={[imageUrl]} />

import ShowCategories from "./ShowCategories";
import ShowBlog from "./ShowBlog";
import "./Home.css";
import CatModal from "../UIElements/CatModal";
import Modal from "../UIElements/Modal";

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

const Landing = (props) => {
  const [width, height] = useWindowSize();
  // let imageUrl = width >= 768 ? bg1b : bg1m;
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    if (width > 768) {
      setBgImage(bg1b);
    } else {
      setBgImage(bg1m);
    }
  }, [width]);

  const errorHandler = () => {
    // setShowModal(false);
  };

  return (
    <div className="col-12 flex-container">
      <div className="imageBox">
        <img
          className="bgImage"
          src={bgImage}
          alt="bg logo with cleaning features and products"
        ></img>
      </div>
      <div className="flex-container bordea">
        <ShowCategories />
        <ShowBlog />
      </div>
    </div>
  );
};

export default Landing;
