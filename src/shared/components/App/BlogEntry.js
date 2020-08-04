import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import { useHistory } from "react-router-dom";
import "./TextStyle.css";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UIElements/Button";

import logo_small from "../../../media/logo_sm_cut.png";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../UIElements/LoadingSpinner";

const BlogEntry = (props) => {
  const [endPoint, setEndpoint] = useState();
  const [blogEntry, setBlogEntry] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();

  useEffect(() => {
    const fecthBlog = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/content/getBlog/${props.match.params.id}`
        );
        setBlogEntry(responseData.blogContent);
      } catch (err) {}
    };

    fecthBlog();
  }, [sendRequest, props]);

  const getEntry = () => {
    return (
      <div className="col-12 mr-auto ml-auto">
        <div className="col-12 mr-auto ml-auto">
          <h2>{blogEntry.title}</h2>
          <p className="entryDate"> {moment(blogEntry.creationDate).format("LL")}</p>
          <div>
            <p className="itemTitle">{blogEntry.abstract}</p>
          </div>
        </div>
        <div className="mr-auto ml-auto col-12 col-md-10 col-lg-7">
          <img
            width="90%"
            src={blogEntry.image}
            alt="brand logo as footer"
          ></img>
          <p className="para">{blogEntry.textContent}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-3">
      {isLoading && <LoadingSpinner asOverlay />}
      <h1 className="itemTitle">Blog</h1>
      <div>{getEntry()}</div>
      <Button floating toBack={"/blog"}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </Button>
      <div className="col-12 mt-5 mb-4">
        <img width="100px" src={logo_small} alt="brand logo as footer"></img>
      </div>
    </div>
  );
};

export default BlogEntry;
