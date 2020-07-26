import React, { useLayoutEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import blogImage from "../../../media/bitmap.png";
import blogImage1 from "../../../media/bitmap2.png";
import { useHistory, Link } from "react-router-dom";
import "./TextStyle.css";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BlogEntry = [
  {
    id: "blog1",
    title: "Enseña a tus niños hábitos saludables",
    resumen: "A short version of this entry",
    text:
      "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no.",
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
    date: "20200718",
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

// <Link
// style={{ textDecoration: "none" }}
// to={`/blog/${item.id}`}
// target="_blank"
// key={k}
// >

// </Link>

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

  const getEntry = () => {
    return BlogEntry.map((item, k) => {
      return (
        <Link
          key={k}
          style={{ textDecoration: "none" }}
          to={`/blog/${item.id}`}
        >
          <div className="row d-flex col-10 col-md-6 mr-auto ml-auto bordeC entryBox">
            <p className="entryTitle col-12">{item.title}</p>
            <div className="col-10 col-sm-4">
              <p className="entryDate"> {moment(item.date).format("LL")}</p>
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
    <h1 className='itemTitle'>Blog</h1>
      <div>{getEntry()}</div>
    </div>
  );
};

export default Blog;
