import React from "react";
import BackgroundSlideshow from "react-background-slideshow";
import bg0 from "../../../media/bg/bg-0.jpg";
import bg1 from "../../../media/bg/bg-1.jpg";
import bg2 from "../../../media/bg/bg-2.jpg";
import bg3 from "../../../media/bg/bg-3.jpg";
import bg4 from "../../../media/bg/bg-4.jpg";
import bg5 from "../../../media/bg/bg-5.jpg";

import ShowCategories from "./ShowCategories";
import ShowBlog from "./ShowBlog";
import "./Home.css";
import ImageBar from "../UIElements/ImageBar";

const Landing = (props) => {
  return (
    <div
      style={{
        // height: "100vh",
        marginTop: "45px",
        marginBottom: "70px",
        backgroundColor: "white",
      }}
    >
      <div style={{ height: "87vh" }}>
        <BackgroundSlideshow images={[bg0, bg1, bg2, bg3, bg4, bg5]} />
      </div>
      <div>
      </div>
      <ImageBar/>
      <div className="flex-container">
        <ShowCategories />
        <ShowBlog />
      </div>
    </div>
  );
};

export default Landing;
