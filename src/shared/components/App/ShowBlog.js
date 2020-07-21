import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import { useHistory } from "react-router-dom";

import blogImage from "../../../media/bitmap.png";
import blogImage1 from "../../../media/bitmap2.png";
const blogEntry = [
  {
    id: "blog1",
    title: "Blog entry title",
    resumen: "A short version of this entry",
    text:
      "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes!",
    image: blogImage,
    hasHighlight: true,
    highlight: "",
    date: "20200202",
  },
  {
    id: "blog2",
    title: "Blog entry title 2",
    resumen: "A short version of this entry",
    text:
      "La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán.",
    image: "https://dummyimage.com/600x400/0450/ffa",
    hasHighlight: true,
    highlight: "",
    date: "20200602",
  },
  {
    id: "blog3",
    title: "Blog entry title 3",
    resumen: "A short version of this entry",
    text:
      "El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo. El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro. El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán. ",
    image: blogImage1,
    hasHighlight: true,
    highlight: "",
    date: "20200614",
  },
];

const ShowBlog = (props) => {
  // const [dateBlog, setDateBlog] = useState();

  const [entry, setEntry] = useState(blogEntry);
  const history = useHistory();

  useEffect(() => {
    moment.locale("es");
    // console.log(blogEntry);
  }, []);

  const showBlogCars = () => {
    return entry.map((item, k) => {
      // console.log(item.title);

      return (
        <div
          key={k}
          className="mt-5 card col-12 col-md-3"
          onClick={() => {
            history.push(`/blog/${item.id}`);
          }}
        >
          <img className="card-img-top" src={item.image} alt="Card imge cap" />
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.resumen}</p>
            <p className="card-text">
              <small className="text-muted">
                {moment(item.date).startOf("day").fromNow()}
              </small>
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="row d-flex col-12 mr-auto ml-auto justify-content-around mt-2">
        {showBlogCars()}
      </div>
    </React.Fragment>
  );
};

export default ShowBlog;
