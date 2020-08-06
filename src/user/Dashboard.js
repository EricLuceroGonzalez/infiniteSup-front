import React, { useState, useEffect } from "react";
import { useHttpClient } from "../shared/hooks/http-hook";
import DateAndTime from "../shared/components/UIElements/DateAndTime";
import "./Dashboard.css";
import Button from "../shared/components/UIElements/Button";
import ErrorModal from "../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
const Dashboard = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isMounted] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      // if (isMounted) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/products/getCategories`
        );
        setCategories(responseData.categories);
        console.log(responseData.categories);
        // setIsMounted(false)
      } catch (err) {}
      // }
    };

    if (isMounted) {
      //  console.log(`isMounted: ${isMounted}`);

      fetchCategories();
    }
  }, [sendRequest, isMounted]);

  const renderProducts = () => {
    if (categories.length > 0) {
      const allCats = categories.map((item, j) => {
        return (
          <div key={j} className="col-12 mr-auto ml-auto">
            <h4>{item.categoryName}</h4>
            {item.products.map((item, k) => {
              return (
                <div key={k} className="col-12 bordeB">
                  {item.name}
                  <div className="col-12 col-sm-4">Descripción</div>
                  <div className="col-12 col-sm-6 bordeB">
                    {item.description.map((item, j) => {
                      return <p key={j}>{item}</p>;
                    })}
                  </div>

                  <div>Ventajas</div>
                  <div className="col-12 col-sm-6 bordeB">
                    {item.features.map((item, j) => {
                      return <p key={j}>{item}</p>;
                    })}
                  </div>
                  <div>
                    <div className="d-flex">
                      <div className="col-12 col-sm-4">Creado:</div>
                      <div className="col-12 col-sm-6">{item.creationDate}</div>
                    </div>
                  </div>
                  <div>Uso domestico</div>
                  <div>{item.domesticUse ? "Si" : "No"}</div>
                  <div>Uso industrial</div>
                  <div>{item.industryUse ? "Si" : "No"}</div>
                  <div className="bordeB" colSpan={item.sizes.length}>
                    Tamaños{item.sizes.length}
                  </div>
                  {item.sizes.map((item, k) => {
                    return (
                      <div key={k} className="bordeB">
                        {item}{" "}
                      </div>
                    );
                  })}
                  <div>Fragancia</div>
                  <div>{item.hasFragance ? "Si" : "No"}</div>
                  <div>Aromas</div>
                  <div>
                    {item.hasFragance &&
                      item.flavors.map((item, k) => {
                        return <span key={k}>{item} </span>;
                      })}
                  </div>
                  <div></div>

                  {item.flavors}
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              );
            })}
          </div>
        );
      });
      return allCats;
    }
  };
  const errorHandler = () => {
    clearError();
  };
  return (
    <div style={{ marginTop: "2em" }}>
    <ErrorModal error={error} onClear={errorHandler} />
    {isLoading && <LoadingSpinner asOverlay />}
      <h2>Dashboard</h2>
      <div>
        <h2>Productos</h2>
        <div className="col-12 row d-flex align">
          <div className="col-12 col-sm-6">
            {" "}
            <DateAndTime />
          </div>
          <Button className="col-12 col-sm-6">Nuevo Producto</Button>
        </div>
        <div className="col-12 bordeA">a</div>
      </div>
      <div>
        <h2>Blog</h2>
        <div>'renderProducts()'</div>
      </div>
    </div>
  );
};
export default Dashboard;
