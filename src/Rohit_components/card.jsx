import { Flex, Box, Image } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import "./card.css";

const Card = ({ ele, displayProp = "grid" }) => {
  const { img1, title, mrp, strike, discount } = ele;
  const StoreAtLocalStorage = () => {
    localStorage.setItem("singleProductdata", JSON.stringify(ele));
  };

  return (
    <Link to={`/singleproduct/${ele._id}`}>
      <Box
        w="90%"
        height="100%"
        padding="5%"
        transition="all 0.8s ease"
        boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px"
        borderRadius="lg"
        margin="auto"
        cursor="pointer"
        _hover={{
          border: "1.5px solid #0b8e87",
          transition: "all 0.5s ease",
          transform: "translateY(-3px)",
          boxShadow: " rgba(17, 17, 26, 0.2) 0px 10px 16px",
        }}
      >
        <div
          id="card-img-div"
          style={{
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            width={{ base: "50%" }}
            height={{
              base: "150px",
              sm: "160px",
              md: "160px",
              xl: "200px",
              lg: "210px",
            }}
            src={img1}
            alt=""
          />
        </div>

        <div
          style={{
            textAlign: "start",
            paddingLeft: "10px",
            fontSize: "0.9em",
            fontSize: "16px",
          }}
        >
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              lineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </p>
          <p style={{ color: "grey" }}>
            MRP <s>{`₹${strike}`}</s>
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontWeight: "bold" }}>₹{mrp} &nbsp; </p>
            <Flex
              align="center"
              justify="start"
              px="6px"
              color="white"
              fontSize="10px"
              fontWeight="600"
              height="100%"
              w="35%"
              bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
            >
              {discount}% OFF
            </Flex>
          </div>
        </div>
      </Box>
    </Link>
  );
};

export default Card;
