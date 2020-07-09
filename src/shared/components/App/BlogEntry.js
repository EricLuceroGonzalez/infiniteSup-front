import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import blogImage from "../../../media/bitmap.png";
import blogImage1 from "../../../media/bitmap2.png";
import { useHistory } from "react-router-dom";

const blogEntry = [
  {
    id: "blog1",
    title:
      "Enseña a tus niños hábitos saludables para frenar la propagación de enfermedades en el salón de clases",
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

const BlogEntry = (props) => {
  const [endPoint, setEndpoint] = useState();
  const history = useHistory();

  useEffect(() => {
    setEndpoint(history.location.pathname.slice(-5));
    console.log(endPoint);
  }, [history.location.pathname, endPoint]);

  const getEntry = () => {
    return blogEntry.map((item) => {
      if (item.id === endPoint) {
        return (
          <div
            className="col-12 mr-auto ml-auto"
          >
            <div className="col-10 mr-auto ml-auto">
              <h2>{item.title}</h2>
              <p style={{ fontFamily: "monospace", color: "gray" }}>
                {" "}
                {moment(item.date).format("LL")}
              </p>
              <div> 
                <p>{item.resumen}</p>
              </div>
            </div>
            <div
              className="mr-auto ml-auto
            col-12 col-md-10 col-lg-7 text-left p-5"
            >
              <p>{item.text}</p>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div className="mt-3">
      <h1>Blog</h1>
      <div>{getEntry()}</div>
    </div>
  );
};

export default BlogEntry;
