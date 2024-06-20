import styles from "./navbar.module.css";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
  useToast,
  SimpleGrid,
  Toast,
} from "@chakra-ui/react";
import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import SelectPin from "./selectPin";
import Select from "react-select";
import { useContext, useRef, useState } from "react";
import { TbDiscount2 } from "react-icons/tb";
import { RiUser5Fill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import backend_url from "../../backendurl";

const options = [
  {
    value: "",
    label: "",
  },

  ,
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  {
    value: "Evion 400mg Strip of 10 Capsules",
    label: "Evion 400mg Strip of 10 Capsules",
  },
  {
    value: "Pan 40mg Strip of 15 Tablets",
    label: "Pan 40mg Strip of 15 Tablets",
  },
  {
    value: "Pharmeasy Multivitamin",
    label: "Pharmeasy Multivitamin",
  },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  { value: "Pharmeasy Multivitamin", label: "Pharmeasy Multivitamin" },
  {
    value: "Grd Chocolate Whey Protein Refill Of 400 G",
    label: "Grd Chocolate Whey Protein Refill Of 400 G",
  },

  {
    value: "Evion 400mg Strip Of 10 Capsules",
    label: "Evion 400mg Strip Of 10 Capsules",
  },
  {
    value: "Neurobion Forte Tablet 30'S",
    label: "Neurobion Forte Tablet 30'S",
  },
  {
    value: "Supradyn Daily Multivitamin Tablets 15s",
    label: "Supradyn Daily Multivitamin Tablets 15s",
  },
  {
    value: "Pharmeasy Multivitamin",
    label: "Pharmeasy Multivitamin",
  },
  {
    value: "Calcimax Forte Plus Strip Of 30 Tablets",
    label: "Calcimax Forte Plus Strip Of 30 Tablets",
  },
  { value: "Pharmeasy Multivitamin", label: "Pharmeasy Multivitamin" },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },

  {
    value:
      "Liveasy Foods Healthy Seed Mix - Blend Of 6 Fibre Rich Healthy Seeds - 200 Gms",
    label:
      "Liveasy Foods Healthy Seed Mix - Blend Of 6 Fibre Rich Healthy Seeds - 200 Gms",
  },
  {
    value: "Lizol Floral Disinfectant Floor Cleaner Liquid Bottle Of 200 Ml",
    label: "Lizol Floral Disinfectant Floor Cleaner Liquid Bottle Of 200 Ml",
  },
  {
    value: "Harpic Lemon Bathroom Cleaner Bottle Of 500 Ml",
    label: "Harpic Lemon Bathroom Cleaner Bottle Of 500 Ml",
  },
  {
    value: "Domex Disinfectant Expert Toilet Cleaner - 500 Ml",
    label: "Domex Disinfectant Expert Toilet Cleaner - 500 Ml",
  },
  {
    value: "Luxor Nano Mobile Disinfectant Cleaner - 10ml On-The-Go",
    label: "Luxor Nano Mobile Disinfectant Cleaner - 10ml On-The-Go",
  },
  {
    value:
      "Tri-Activ Disinfectant Spray For Multi-Surfaces 70% Alcohol Based - 100ml",
    label:
      "Tri-Activ Disinfectant Spray For Multi-Surfaces 70% Alcohol Based - 100ml",
  },
  {
    value:
      "Ezee Bio-Degradable Large Garbage Bags (24 X 32 Inches) Packet Of 15",
    label:
      "Ezee Bio-Degradable Large Garbage Bags (24 X 32 Inches) Packet Of 15",
  },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#9e9e9e",
    minHeight: "30px",
    height: "3rem",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "3rem",
  }),
};
const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const [val, setVal] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [credentials, setCredentials] = useState({
    Email: "",
    Password: "",
  });
  const btnRef = useRef();
  const [otpState, setOtpState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp1, setOtp1] = useState(0);
  const [otp2, setOtp2] = useState(0);
  const [otp3, setOtp3] = useState(0);
  const [otp4, setOtp4] = useState(0);
  const [emptyError, setEmptyError] = useState(false);
  const toast = useToast();
  const value = useContext(AuthContext);
  const navigate = useNavigate();

  const HandleInputChange = (e) => {
    let { value, name } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const HangleLogin = async () => {
    if (!credentials.Email || !credentials.Password)
      return toast({
        title: "Fill The Credentials Correctly",
        status: "error",
        position: "top",
      });

    setLoading(true);
    try {
      axios.post(`${backend_url}/login`, credentials).then((res) => {
        const { token, Type } = res.data;
        if (token) {
          if (Type == "USER") {
            toast({
              title: "LOGIN SUCCESSFULL",
              status: "success",
              position: "top",
            });
          } else if (Type == "ADMIN") {
            toast({
              title: "WELCOME ADMIN",
              status: "success",
              position: "top",
            });

            toggleAuth();
            navigate("/adminpage");
          }

          onClose();
          localStorage.setItem("logIn", true);

          value.setAuthState(true);
        } else {
          toast({
            title: res.data.msg,
            status: "error",
            position: "top",
          });
        }
        setLoading(false);
      });
    } catch (err) {
      toast({
        position: "top",
        status: "error",
        title: "Something Went Wrong Please Try Again",
      });
    }

    setLoading(false);
  };

  const handleSignup = async () => {
    if (!credentials.Email || !credentials.Password)
      return toast({
        title: "Fill The Credentials Correctly",
        status: "error",
        position: "top",
      });
    try {
      setLoading(true);
      axios.post(`${backend_url}/signup`, credentials).then((res) => {
        const responseMessage = res.data.msg;
        toast({ position: "top", title: responseMessage, status: "info" });
        setLoading(false);
      });
    } catch (err) {
      toast({
        position: "top",
        status: "error",
        title: "Something Went Wrong Please Try Again",
      });
    }

    setLoading(false);
  };

  const handleChange = (values) => {
    setVal(values);
  };

  var details = val.value;

  useEffect(() => {
    if (details) {
      navigate(`/productdetails/${details}`);
    }
  }, [details]);

  // const sendMail = async (mail) => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.post(
  //       "https://pharmeasylion.herokuapp.com/api/user/mail",
  //       {
  //         mail,
  //       }
  //     );
  //     localStorage.setItem("user_id", res.data.id);
  //     setOtpState(true);
  //     setLoading(false);
  //   } catch (err) {
  //     setOtpState(false);
  //     setLoading(false);
  //     toast({
  //       title: `Try Again`,
  //       status: "error",
  //       isClosable: true,
  //     });
  //   }
  // };

  const sendOtp = async () => {
    setLoading(true);
    try {
      let otp = "";
      otp += otp1 + otp2 + otp3 + otp4;
      const user_id = localStorage.getItem("user_id");
      const res = await axios.post(
        `https://pharmeasylion.herokuapp.com/api/user/verify/${user_id}`,
        { otp: Number(otp) }
      );
      if (res.data === "your otp has been verified!") {
        onClose();
        setLoading(false);
        localStorage.setItem("logIn", true);
        value.setAuthState(true);
        toast({
          title: `User LoggedIn successfully`,
          status: "success",
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: `Otp is Wrong`,
        status: "error",
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className=""
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
          alt=""
        />
      </div>

      <div>
        <div>
          <InputGroup size="lg" width={"75%"}>
            <InputLeftAddon children={<SelectPin />} />

            <div
              className={styles.serach}
              style={{ width: "40rem", height: "3rem", objectFit: "contain" }}
            >
              <Select
                onChange={handleChange}
                placeholder="Search medicines/Healthcare products"
                svg=""
                options={options}
                color={"black"}
                styles={customStyles}
              />
            </div>

            <InputRightAddon children={<SearchIcon h={8} color="gray.500" />} />
          </InputGroup>
        </div>

        <div className={styles.tabContainer}>
          <div>
            <div>
              <Link to="/orderMed">Order Medicines</Link>
            </div>
            <div>
              <Link to="/healthcare">Healthcare Products</Link>
            </div>
            <div>
              <Link to="/labtest">Lab tests</Link>
            </div>
            <div>
              <Link to="/rtpcr">RTPCR</Link>
            </div>
          </div>
          <Flex marginRight={"2rem"}>
            <Flex className={styles.sidebar}>
              <TbDiscount2
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <p style={{ color: "white" }}>Offers</p>
            </Flex>
            <Flex className={styles.sidebar}>
              <RiUser5Fill
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <Menu>
                <MenuButton
                  style={{ cursor: "pointer", color: "white" }}
                  ref={btnRef}
                  onClick={onOpen}
                >
                  {value.authState ? "Profile" : "Login / Signup"}
                </MenuButton>
                {value.authState ? (
                  <>
                    <MenuList>
                      <MenuItem
                        onClick={() => navigate("/myorders")}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        My Orders
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate("/myrefills")}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        My Refills
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate("/medicalrecord")}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        Medical Records
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate("/myprofile")}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        My Profile
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate("/wallet")}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        Wallet
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate("/refer")}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        Refer & Earn
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate("/")}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        Notification
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          localStorage.removeItem("user_id");
                          localStorage.removeItem("logIn");
                          value.setAuthState(false);
                        }}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        Log Out
                      </MenuItem>
                    </MenuList>
                  </>
                ) : (
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    size="sm"
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>
                        <Flex bg="teal.500" height="100px">
                          <Box marginTop={"1rem"} marginLeft={"1rem"}>
                            <Image
                              src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                              alt=""
                              width={"10rem"}
                            />
                          </Box>

                          <Box marginTop={"1rem"} marginLeft={"3rem"}>
                            <Image
                              src="	https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"
                              alt=""
                              width={"8rem"}
                            />
                          </Box>
                        </Flex>
                      </DrawerHeader>
                      {otpState ? (
                        <DrawerBody>
                          <Heading size="md">Enter OTP sent to </Heading>
                          <br />

                          <HStack>
                            <PinInput size="lg">
                              <PinInputField
                                onChange={(e) => setOtp1(e.target.value)}
                              />
                              <PinInputField
                                onChange={(e) => setOtp2(e.target.value)}
                              />
                              <PinInputField
                                onChange={(e) => setOtp3(e.target.value)}
                              />
                              <PinInputField
                                onChange={(e) => setOtp4(e.target.value)}
                              />
                            </PinInput>
                          </HStack>
                          <Button
                            onClick={() => {
                              let otp = "";
                              otp += otp1 + otp2 + otp3 + otp4;
                              if (otp !== "") {
                                sendOtp();
                              } else {
                                setEmptyError(true);
                              }
                            }}
                            isLoading={loading ? true : false}
                            colorScheme="teal"
                            size="lg"
                            style={{ marginTop: "1rem" }}
                            width={"25rem"}
                          >
                            Submit
                          </Button>
                        </DrawerBody>
                      ) : (
                        <DrawerBody>
                          <Heading size="md"> Quick Login / Register</Heading>
                          <br />

                          <Input
                            type="email"
                            name="Email"
                            required
                            isInvalid={emptyError ? true : false}
                            errorBorderColor={emptyError ? "red.300" : ""}
                            placeholder="Email"
                            onChange={HandleInputChange}
                          />

                          <Input
                            mt="5%"
                            type="password"
                            name="Password"
                            required
                            isInvalid={emptyError ? true : false}
                            errorBorderColor={emptyError ? "red.300" : ""}
                            placeholder="Password"
                            onChange={HandleInputChange}
                          />

                          <br />
                          <Button
                            mt="5%"
                            onClick={HangleLogin}
                            isLoading={loading}
                            colorScheme="teal"
                            size="lg"
                            width={"25rem"}
                          >
                            LOGIN
                          </Button>
                          <br />
                          <br />

                          <Text color="gray">
                            New On Website?{" "}
                            <span
                              onClick={handleSignup}
                              style={{
                                color: "blue",
                                cursor: "pointer",
                                textDecoration: "underline",
                                fontWeight: "bolder",
                              }}
                            >
                              SignUP
                            </span>
                          </Text>

                          <br />
                          <br />

                          <Text fontSize="sm" color="teal.500">
                            By clicking continue, you agree with our Privacy
                            Policy
                          </Text>
                        </DrawerBody>
                      )}
                    </DrawerContent>
                  </Drawer>
                )}
              </Menu>
            </Flex>

            <Flex className={styles.sidebar}>
              <HiShoppingCart
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <Link to="/cart">Cart</Link>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
