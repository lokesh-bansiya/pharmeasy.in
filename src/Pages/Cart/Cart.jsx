import {
  Box,
  Button,
  Image,
  Select,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useContext(AuthContext);
  const toast = useToast();
  const [cartdata, setcartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const getCartData = () => {
    let data = JSON.parse(localStorage.getItem("cartData")) || [];
    setcartData(data);
    GetTotalvalue();
  };

  const deleteItem = (index) => {
    console.log(index);
    let latestdata = [...cartdata];
    latestdata.splice(index, 1);
    setcartData(latestdata);
    localStorage.setItem("cartData", JSON.stringify(latestdata));
    GetTotalvalue();
  };

  const GetTotalvalue = () => {
    let data = JSON.parse(localStorage.getItem("cartData")) || [];
    let sum = 0;
    if (data != []) {
      for (let x = 0; x < data.length; x++) {
        sum += Number(data[x].mrp);
      }
      setTotalAmount(Math.floor(sum));
    }
  };

  const Gotopayment = () => {
    if (authState) {
      navigate("/payment");
    } else {
      toast({
        title: "Please Login First",
        position: "top",
        isClosable: true,
        status: "warning",
      });
    }
  };

  const addAdress = () => {
    if (authState) {
      onOpen();
    } else {
      toast({
        title: "Please Login First",
        position: "top",
        isClosable: true,
        status: "warning",
      });
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const SaveAdreess = () => {
    onClose();
    toast({
      title: "New Address Added Successfully",
      position: "top",
      isClosable: true,
      status: "info",
    });
  };

  if (cartdata.length == 0) {
    return (
      <Box textAlign="center" alignContent="center">
        <Text
          fontWeight="Bold"
          color="gray.600"
          fontFamily="sans-serif"
          fontSize="6xl"
        >
          OOps... Cart is Empty
        </Text>
        <Link to="/product">
          <Image
            margin="auto"
            width="300px"
            src="https://media.tenor.com/wtWn-AjUZ5YAAAAi/add-to-cart-aggiungi-a-carrello.gif"
            alt=""
          />
        </Link>
      </Box>
    );
  }

  return (
    <Box marginTop="20px" display={{ sm: "grid", lg: "flex" }}>
      <section style={{ width: "65%" }}>
        <Box pl="10">
          <Text
            fontSize={{ sm: "x-small", md: "large", md: "3xl" }}
            fontWeight="bold"
            color="gray.600"
          >{`${cartdata.length} Items In Cart`}</Text>
        </Box>

        <Box mt="5" pl="5" display="grid" gap="20px">
          {cartdata &&
            cartdata.map(({ id, title, img1, mrp, strike }, index) => (
              <Box
                borderRadius="10"
                padding="5"
                border="1.5px solid #e2e6e8"
                display="flex"
                pl="4"
                width="100%"
                h="200px"
                key={index}
              >
                <Image width="90px" h="auto" src={img1} alt="" />

                <Box w="100%" display="grid" ml="5">
                  <Text
                    fontSize={{ sm: "x-small", md: "large", md: "2xl" }}
                    fontWeight="bold"
                    color="gray.600"
                  >
                    {title}
                  </Text>

                  <Box
                    width="80%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Text color="gray.500" fontSize="xl">
                      MRP{" "}
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        ₹{mrp}
                      </span>
                    </Text>

                    <Text fontSize="xl" color="gray.400">
                      MRP <s>{`₹${strike}`}</s>
                    </Text>

                    <Select width="100px">
                      <option value="">Qyt 1</option>
                      <option value="">Qyt 2</option>
                      <option value="">Qyt 3</option>
                      <option value="">Qyt 4</option>
                    </Select>
                    <Button
                      onClick={() => deleteItem(index)}
                      colorScheme="orange"
                      size="md"
                      w="150px"
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </section>

      <section style={{ textAlign: "center", width: "35%", paddingTop: "5%" }}>
        <Box>
          <Button
            size="lg"
            width="65%"
            fontWeight="bold"
            variant="outline"
            colorScheme="teal"
          >{`Apply Coupons/ Offers   >`}</Button>
          <Button
            ref={btnRef}
            onClick={addAdress}
            mt="30px"
            size="lg"
            width="65%"
            fontWeight="bold"
            colorScheme="teal"
          >
            Add Delivery Address
          </Button>
        </Box>

        <Box display="grid">
          <Box mt="10" paddingLeft="17%" textAlign="start">
            <Text fontSize="2xl" fontWeight="bold" color="gray.700">
              Order Summary
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            paddingLeft="17%"
            paddingRight="17%"
            textAlign="start"
          >
            <Text fontSize="large" color="gray.700">
              Cart value
            </Text>{" "}
            <Text fontSize="large" color="gray.700" fontWeight="semibold">
              ₹{totalAmount} .00
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            paddingLeft="17%"
            paddingRight="17%"
            textAlign="start"
          >
            <Text fontSize="large" color="gray.700">
              Total Payable Amount
            </Text>{" "}
            <Text fontWeight="semibold" fontSize="large" color="gray.700">
              ₹{totalAmount} .00
            </Text>
          </Box>

          <Box mt="20px">
            <Button
              onClick={Gotopayment}
              size="lg"
              width="65%"
              fontWeight="bold"
              colorScheme="teal"
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </section>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Address</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Name" />
            <Input mt="20px" placeholder="City" />
            <Input mt="20px" placeholder="State" />
            <Input mt="20px" placeholder="Zipcode" />
            <Input mt="20px" placeholder="Adresss" />
            <Input mt="20px" placeholder="Landmark" />
            <Input mt="20px" placeholder="Phone" />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={SaveAdreess} colorScheme="blue">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
export default Cart;
