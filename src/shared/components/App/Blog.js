import React, { useEffect, useLayoutEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import blogImage1 from "../../../media/donaciones.jpeg";
import blogImage2 from "../../../media/bitmap2.png";
import blogImage3 from "../../../media/navlogo.png";
import { useHistory, Link } from "react-router-dom";
import "./TextStyle.css";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../UIElements/LoadingSpinner";

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

const Blog = () => {
  const [width, height] = useWindowSize();
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    document.title = 'Infinite Supplies | Blog'
    const fecthBlog = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/content/getBlog`
        );
        setBlogEntries(responseData.blogContent);
      } catch (err) {}
    };

    fecthBlog();
  }, [sendRequest]);

  const getEntry = () => {
    return blogEntries.map((item, k) => {
      return (
        <Link
          key={k}
          style={{ textDecoration: "none" }}
          to={`/blog/${item._id}`}
        >
          <div className="row d-flex col-10 col-md-6 mr-auto ml-auto bordeC entryBox">
            <p className="entryTitle col-12">{item.title}</p>
            <div className="col-10 col-sm-4">
              <p className="entryDate"> {moment(item.creationDate).format("LL")}</p>
              <p className="para"> {item.resumen}</p>
            </div>
            {width > "500" ? (
              <div className="col-10 col-sm-8 d-flex align-items-end">
                <img
                  className="entryImg"
                  src={item.image}
                  alt="blog entry"
                ></img>
                <FontAwesomeIcon
                  className="ml-auto entryArrow"
                  icon={faChevronRight}
                />
              </div>
            ) : (
              <div className="col-2 entryArrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            )}
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="mt-3">
      {isLoading && <LoadingSpinner asOverlay />}
      <h1 className="itemTitle">Blog</h1>
      <div>{getEntry()}</div>
    </div>
  );
};

export default Blog;
