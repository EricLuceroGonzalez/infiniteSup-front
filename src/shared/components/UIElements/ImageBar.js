import React, { useState } from "react";

import banner from '../../../media/banner/1600x300-1.jpg'

const ImageBar = () => {
  return (
    <React.Fragment>
          <img width='100%' height='auto'
          src={banner} alt="show label"></img>
    </React.Fragment>
  );
};

export default ImageBar;
