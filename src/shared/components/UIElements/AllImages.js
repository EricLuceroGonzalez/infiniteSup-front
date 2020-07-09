import React, { useState, useEffect } from "react";

const bg0 = "/home/ericlucero/Documents/dev/devProyects/06-infiniteSupplies/frontend/src/media/bg-0.jpg";
const bg1 = "/home/ericlucero/Documents/dev/devProyects/06-infiniteSupplies/frontend/src/media/bg-1.jpg";
const AllImages = (props) => {

  const [images, setImages] = useState([]);


  useEffect( ()=>{
      setImages(bg1)
      
  }, [])
  const renderImages = () => {
    console.warn(`render ${images.length} Images`);
console.log(images);

    //   return images.map((source, k) => {
        // console.info(`k = ${k}`);
        console.log(images);       
        return (
          <div className="image-card-container" >
            <div className="image-card">
              <img
                className="main-image"
                src={images}
                alt={images}
              />
            </div>
          </div>
        );
    //   });
    
  };

  return(
      <React.Fragment>
      <div style={{ border: "1px dashed red" }}>
        { renderImages()}
      </div>
    </React.Fragment>
  )

};

export default AllImages;
