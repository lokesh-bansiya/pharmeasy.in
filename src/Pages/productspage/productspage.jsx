import Products from "../../Rohit_components/products";
import { skincareProducts, homecareProducts } from "../../data/data";
import { useState, useEffect } from "react";
import backend_url from "../../backendurl";
import axios from "axios";

const ProductsPage = () => {
  const [data, setdata] = useState([]);

  const getDataFromBackend = async () => {
    try {
      axios.get(`${backend_url}/products`).then((res) => {
        setdata(res.data);
      });
    } catch (err) {
      alert("SERVER DOWN : SOMETHING WRONG WITH BACKEND");
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  return (
    <div>
      <div style={{ width: "100%" }}>
        {!data[0] && (
          <img
            style={{ margin: "auto", width: "25vW", paddingTop: "4%" }}
            src="https://i.ibb.co/FscXL6V/Spinner-1s-200px.gif"
            alt="Spinner-1s-200px"
            border="0"
          />
        )}

        {data[0] && <Products data={data} />}
      </div>
    </div>
  );
};

export default ProductsPage;
