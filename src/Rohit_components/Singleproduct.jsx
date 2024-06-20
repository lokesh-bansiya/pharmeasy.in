import "./singleproduct.css";
import { Box, Image, Text, Button, Divider, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backend_url from "../backendurl";

const SingleProduct = ({ cartValue, setCartValue }) => {
  const toast = useToast();
  const [product, setproductdata] = useState({});
  const [brand, setbrand] = useState([]);
  const { ID } = useParams();
  console.log({ backend_url, ID });

  async function getSingleProduct() {
    axios.get(`${backend_url}/products/${ID}`).then((res) => {
      console.log("result", res?.data);
      setproductdata(res?.data);
      let temp = product.title;
      // let temp = product.title.split(" ");
      setbrand(temp);
    });
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    getSingleProduct();
  }, []);

  console.log({ product });

  const addToCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const isPresent = () => {
      for (let x = 0; x < cartData.length; x++) {
        if (cartData[x].title == product.title) {
          return true;
        }
      }

      return false;
    };

    if (isPresent()) {
      toast({
        title: "Product is already in cart",
        position: "top",
        isClosable: true,
        status: "warning",
      });
      return;
    }

    let newData = [...cartData, product];
    localStorage.setItem("cartData", JSON.stringify(newData));

    toast({
      title: "Item added to cart",
      position: "top",
      isClosable: true,
      status: "success",
    });
    setCartValue(cartValue + 1);
  };

  return (
    <div id="single-product-parent">
      {/* image section */}
      <Box
        width={{ lg: "400px", md: "300px" }}
        height={{ lg: "400px", md: "250px" }}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ maxWidth: "90%", maxHeight: "90%" }}
          src={product?.img1 || "img"}
          alt=""
        />
      </Box>

      {/* data section */}
      <section style={{ width: "100%" }}>
        {/* 
      title and ratings div */}
        <div id="single-product-heading">
          <Text
            fontSize={{ sm: "x-small", md: "large", md: "2xl" }}
            fontWeight="bold"
            color="gray.600"
          >
            {product?.title ? product?.title : "-"}
          </Text>

          {brand?.length > 0 ? (
            <Text color="teal.600" mt="4" fontSize="xl">
              Visit {brand[0]} store
            </Text>
          ) : (
            ""
          )}

          <div>
            <div
              style={{ display: "flex", fontSize: "20px", marginTop: "20px" }}
            >
              <p style={{ color: "grey" }}>
                MRP <s>{`₹${product?.strike || "-"}`}</s>
              </p>
              <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                ₹{product?.mrp || "-"} &nbsp;{" "}
                <span style={{ color: "red" }}>{`${
                  product?.discount || "0"
                }% OFF`}</span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <div>
                <Text fontSize="xs" color="gray.500">
                  Inclusive of all taxes
                </Text>
                <Text fontSize="sm">
                  Delivery by{" "}
                  <span style={{ fontWeight: "bold" }}>2 Dec - 17 Nov</span>
                </Text>
              </div>

              <Box ml="30%">
                <Button onClick={addToCart} size="lg" colorScheme="teal">
                  Add to cart
                </Button>
              </Box>
            </div>
            <br />
            <Divider></Divider>
          </div>
        </div>

        <Box mt="4" textAlign="start">
          <Text fontSize="20" fontWeight="bold" color="gray.600">
            Select Available variant
          </Text>

          <Text mt="5px" fontSize="15" fontWeight="bold" color="gray.600">
            Pack size
          </Text>

          <Box mt="5" display="flex" gap="4">
            <Button colorScheme="teal" variant="outline">
              2 Units
            </Button>
            <Button colorScheme="teal" variant="outline">
              4 Units
            </Button>
            <Button colorScheme="teal" variant="outline">
              10 Units
            </Button>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default SingleProduct;
