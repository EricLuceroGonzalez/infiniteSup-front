import React, { useLayoutEffect, useState } from "react";

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

const ShowWindowDimensions = (props) => {
  const [width, height] = useWindowSize();
  return (
    <span>
      Window: {width} x {height}
    </span>
  );
};

export default ShowWindowDimensions;
