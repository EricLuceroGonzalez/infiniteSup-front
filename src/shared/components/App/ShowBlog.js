import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import { useHistory, Link } from "react-router-dom";

import blogImage1 from "../../../media/donaciones.jpeg";
import blogImage2 from "../../../media/bitmap2.png";
import blogImage3 from "../../../media/navlogo.png";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../UIElements/LoadingSpinner";
const ShowBlog = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [blogEntries, setBlogEntries] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fecthBlog = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/content/getBlog`
        );
        console.log(responseData.blogContent);
        setBlogEntries(responseData.blogContent);
      } catch (err) {}
    };

    fecthBlog();
  }, [sendRequest]);

  useEffect(() => {
    moment.locale("es");
  }, []);

  const showBlogCars = () => {
    return blogEntries.map((item, k) => {
      // console.log(item.title);

      return(
        <Link
        key={k}
        style={{ textDecoration: "none" }}
        className="row d-flex col-12 col-md-3 mr-auto ml-auto entryBox"
        to={`/blog/${item._id}`}
        >
          <div className="col-12 d-flex align-items-end">
            <img className="entryImg" src={item.image} alt="blog entry"></img>
          </div>
          <p className="mt-4 entryTitle col-12">{item.title}</p>
          <div className="col-10 col-sm-12">
            <p className="entryDate"> {moment(item.date).format("LL")}</p>
            <p className="para"> {item.abstract}</p>
            <div className="entryDate">
              Leer mas{" "}
              <FontAwesomeIcon
                className="ml-auto entryArrow"
                icon={faChevronRight}
              />
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="row d-flex col-12 mr-auto ml-auto justify-content-around mt-2">
        {showBlogCars()}
      </div>
    </React.Fragment>
  );
};

export default ShowBlog;
