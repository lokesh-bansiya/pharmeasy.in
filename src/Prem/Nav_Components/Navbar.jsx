
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
import { useMediaQuery } from '@chakra-ui/react'
import DrawerLogin from "./DrawerLogin";


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
  const [val, setVal] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [otpState, setOtpState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp1, setOtp1] = useState(0);
  const [otp2, setOtp2] = useState(0);
  const [otp3, setOtp3] = useState(0);
  const [otp4, setOtp4] = useState(0);
  const toast = useToast();
  const value = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (values) => {
    setVal(values);
  };

  var details = value;
  console.log("details:", details);

  useEffect(() => {
    if (details.isAuth) {
      navigate(`/`);
    }
  }, [details]);

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img className=""
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
          alt=""
        />
      </div>

      <div>
       
        <div>
       
          <InputGroup size="lg" width={"75%"}>
            <InputLeftAddon children={<SelectPin />} />
            <div className={styles.serach}
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
          <div >
            <div >
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
              <Menu>
                <MenuButton
                  style={{ cursor: "pointer", color: "white" }}
                  ref={btnRef}
                >
                </MenuButton>
                { localStorage.getItem("isAuth") == true ? (
                  <>
                  <MenuButton style={{ cursor: "pointer", color: "white" }}
                  ref={btnRef}>
                     Profile
                  </MenuButton>
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
                          localStorage.setItem("logIn",false);
                          localStorage.setItem("isAuth", false);
                        }}
                        color="black"
                        _hover={{ color: "teal.500" }}
                      >
                        Log Out
                      </MenuItem>
                    </MenuList>
                  </>
                ) : (
                  <DrawerLogin/>
                )}
              </Menu>
            </Flex>

            <Flex className={styles.sidebar}>
              <HiShoppingCart
                style={{ marginTop: "0.2rem", marginRight: "0.4rem", }}
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
