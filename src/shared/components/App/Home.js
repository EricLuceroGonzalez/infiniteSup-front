import React from "react";
import BackgroundSlideshow from "react-background-slideshow";
import bg0 from "../../../media/bg-0.jpg";
import bg1 from "../../../media/bg-1.jpg";
import bg2 from "../../../media/bg-2.jpg";
import bg3 from "../../../media/bg-3.jpg";
import bg4 from "../../../media/bg-4.jpg";
import bg5 from "../../../media/bg-5.jpg";

import AllImages from "./AllImages";
import ShowCategories from "./ShowCategories";
import ShowBlog from "./ShowBlog";

const Landing = (props) => {
  return (
    <div
      style={{
        // height: "100vh",
        marginTop: "45px",
        backgroundColor: "white",
      }}
    >
      <div style={{ height: "90vh" }}>
        <BackgroundSlideshow images={[bg0, bg1, bg2, bg3, bg4, bg5]} />
      </div>
      <div
        style={{
          height: "100vh",
          marginTop: "45px",
          // backgroundColor: "rgba(255,0,0,0.1)",
        }}
      >
      <ShowCategories/>
      <ShowBlog/>

      </div>
    </div>
  );
};

export default Landing;
