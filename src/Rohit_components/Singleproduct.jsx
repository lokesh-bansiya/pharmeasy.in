import "./singleproduct.css";
import { Box, Image, Text, Button, Divider, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const SingleProduct = ({ cartvalue, setcartvalue }) => {
  const toast = useToast();
  const [product, setproductdata] = useState({});
  const [brand, setbrand] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem("singleProductdata")
    );
    setproductdata(localStorageData);

    let temp = localStorageData.title.split(" ");
    setbrand(temp);
  }, []);
  const { img1, title, mrp, strike, discount } = product;

  const addToCart = () => {
    const cartdata = JSON.parse(localStorage.getItem("cartData")) || [];
    const ispresent = () => {
      for (let x = 0; x < cartdata.length; x++) {
        if (cartdata[x].title == product.title) {
          return true;
        }
      }

      return false;
    };

    if (ispresent()) {
      toast({
        title: "Product is already in cart",
        position: "top",
        isClosable: true,
        status: "warning",
      });
      return;
    }

    let newdata = [...cartdata, product];
    localStorage.setItem("cartData", JSON.stringify(newdata));

    toast({
      title: "Item added to cart",
      position: "top",
      isClosable: true,
      status: "success",
    });
    setcartvalue(cartvalue + 1);
  };

  return (
    <div id="single-product-parent">
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
          src={img1}
          alt=""
        />
      </Box>

      {/* data section */}
      <section style={{ width: "100%" }}>
        {/* title and ratings div */}
        <div id="single-product-heading">
          <Text
            fontSize={{ sm: "x-small", md: "large", md: "2xl" }}
            fontWeight="bold"
            color="gray.600"
          >
            {title}
          </Text>

          <Text color="teal.600" mt="4" fontSize="xl">
            Visit {brand[0]} store
          </Text>

          <div>
            <div
              style={{ display: "flex", fontSize: "20px", marginTop: "20px" }}
            >
              <p style={{ color: "grey" }}>
                MRP <s>{`₹${strike}`}</s>
              </p>
              <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                ₹{mrp} &nbsp;{" "}
                <span style={{ color: "red" }}>{`${discount}% OFF`}</span>
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
