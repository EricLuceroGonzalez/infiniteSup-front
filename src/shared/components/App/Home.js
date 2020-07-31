import React, { useEffect, useState, useLayoutEffect } from "react";

import bg1m from "../../../media/bg/1-mobile.png";
import bg2m from "../../../media/bg/2-mobile.png";
import bg3m from "../../../media/bg/3-mobile.png";
import bg4m from "../../../media/bg/4-mobile.png";

import bg1b from "../../../media/bg/1-1920x1080.png";
import bg2b from "../../../media/bg/2-1920x1080.png";
import bg3b from "../../../media/bg/3-1920x1080.png";
import bg4b from "../../../media/bg/4-1980x1080.png";
// <BackgroundSlideshow images={[imageUrl]} />

import ShowCategories from "./ShowCategories";
import ShowBlog from "./ShowBlog";
import "./Home.css";
import { CSSTransition } from "react-transition-group";

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
  const [bgImages, setBgImages] = useState([bg1b, bg2b, bg3b, bg4b]);
  const [bgMobile, setBgMobile] = useState([bg1m, bg2m, bg3m, bg4m]);
  const [bgImage, setBgImage] = useState("");
  const [bgTimer, setBgTimer] = useState(0);
  const [imageIn, setImageIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      if (bgTimer < 3) {
        setTimeout(() => {
          setImageIn(true);
          setBgTimer(bgTimer + 1);
        }, 6200);
        // setImageIn(false)
      } else {
        setTimeout(() => {
          setImageIn(true);
          setBgTimer(0);
        }, 6200);
      }
      if (width > 768) {
        setBgImage(bgImages[bgTimer]);
      } else {
        setBgImage(bgMobile[bgTimer]);
      }
    }
  }, [width, bgTimer, bgImages, bgMobile, isMounted]);


  useEffect(() => {
    return () => {
      console.log("perras!");
      setIsMounted(false)
    };
  }, []);
  const bgTransit = () => {
    // console.log(`Here bgTimer: ${bgTimer}`);
    // console.log(`Here imageIn: ${imageIn}`);
    return (
      <div>
        <CSSTransition in={imageIn} timeout={300} classNames="sample">
          <img
            className="bgImage"
            src={bgImage}
            alt={"Brand logo, people cleaning"}
          />
        </CSSTransition>
      </div>
    );
  };

  return (
    <div className="col-12 flex-container">
      {bgTransit()}
      <div>
        <div className="mt-5 category">Productos</div>
        <ShowCategories />
      </div>
      <div>
        <div className="mt-5 category">Blog</div>
        <ShowBlog />
      </div>
    </div>
  );
};

export default Landing;
